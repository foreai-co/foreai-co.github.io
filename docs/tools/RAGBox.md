---
sidebar_position: 1
---

A very simple to use to RAG. There are three ways to use it

1. RAGbox Library
2. REST API locally
3. REST API from docker image

For all the examples below you'll need the openai credentials
```
export OPENAI_API_KEY=<your_dev_key_here>
export OPENAI_ORGANIZATION=<your_org_token_here>
```

## RAGbox Library

First, you'll need a `RAGconfig`. You can specify it as a python dictionary. For refernce
of configuration options, see the [source](https://github.com/foreai-co/ragbox/blob/8957fc9eaf91c3db51e7b1060b3c647917783feb/ragbox/models/rag_model.py#L144).

Example:
```
from ragbox.models.rag_model import RagConfig
config = {
    "identifier": "myConfig",
    "k_neighbors": 5,
    "language_model_config": {
        "model_type": "OpenAIChatModel"
    },
    "embedding_config": {
        "model_type": "OPENAI",
        "model_name": "text-embedding-ada-002",
        "embedding_size": 1536
    },
    "index_config": {
        "chunk_size": 1024,
        "chunk_overlap": 64
    },
    "prompt_config": {
        "prompt_format":
        "Answer \"{query}\" consicely and only use information from this context: {formatted_results}"
    }
}
rag_config = RagConfig(**config)
```

### Install the library:
```
pip install -e .
```

### Create your RAGbox and set the correct config:
```
from ragbox.app.box import RAGbox
ragbox = RAGbox("/tmp", "myRAG")
ragbox.set_config(rag_config)
ragbox.set_live("MyConfig")
```

### Add your docs to the RAG:
```
from ragbox.data_store.doc_store import Doc
ragbox.add_doc(
    Doc(title="Mark Twain's wisdoms #1",
        body="Whenever you find yourself on the side of the majority, "
        "it is time to pause and reflect"))
ragbox.add_doc(
    Doc(title="Mark Twain's wisdoms #2",
        body="Get your facts first, then you can distort them as "
        "you please."))
```

### Index the docs and update the RAG index:
```
ragbox.index()
```

### Query your RAG:
```
result = ragbox.generate_with_refs(
    "What should I do when I'm in a majority?")
#  result["response"] == "When you find yourself in a majority, pause and reflect."
```

## RAGbox REST API

### Start from docker image

Pull the image from the repo:
```
docker pull forefab/ragbox
```

or build your own image using your own config. Make sure the config file is in
the `ragbox` repository root (that way it will get copied into the container), and the
`CONFIG_PATH` needs to be relative to the top-level `ragbox` repository root:
```
docker build \
 --build-arg OPENAI_API_KEY=${OPENAI_API_KEY} \
 --build-arg OPENAI_ORGANIZATION=${OPENAI_ORGANIZATION} \
 -t ragbox:20231023 -t ragbox:latest \
 -f app/docker_env/Dockerfile \
 .
```

The run it:

```
docker run -p 127.0.0.1:8010:8010 -p 127.0.0.1:2222:2222 \
    forefab/ragbox
```

You can SSH into your docker container on port 2222 using user `root` and password `Docker!`. This can be useful for debugging the binary by accessing the filesystem and logs.
```
ssh root@localhost:2222
```


### Start from github clone

Start up your RAGbox service:
```
python3 ragbox_service.py \
    --root_path ./RAGbox-data/
    --identifier myRAG \
    --port 8010
```

On your first start, you will have to add the config to the config_store. Use:
```
curl -X PUT -H "Content-Type: application/json" \
  -d @config.json \
  http://localhost:8010/api/configs/myConfig
```

Make sure the config file exists and contains the json version of the above.
You can also use this [example config](https://github.com/foreai-co/ragbox/blob/main/ragbox/app/docker_env/openai_rag.json).

You can list the configs:
```
curl -X GET http://localhost:8010/api/configs
```

Then, set the config live:
```
curl -X PUT http://localhost:8010/api/configs/myConfig/live
```

The service will start up and you can query it via HTTP.  Next time you start it up, it will
start up with the config you set live.

### Add documents to the service
```
curl -X POST -H "Content-Type: application/json" \
    -d '{"docs": [
    {
        "title": "Mark Twains wisdoms #1",
        "body": "Whenever you find yourself on the side of the majority, it is time to pause and reflect"
    }, {
        "title": "Mark Twains wisdoms #2",
        "body": "Get your facts first, then you can distort them as you please."
    }]}' \
    http://localhost:8010/api/docs/add
```

### Index

```
curl http://localhost:8010/api/index
```

### Query
```
curl -X POST -H "Content-Type: application/json" \
    -d '{"query": "What should I do when I'\''m in a majority?"}' \
    http://localhost:8010/api/query
```
