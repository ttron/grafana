# Build docker image

```bash
make build-docker-full
docker images

docker tag docker.io/grafana/grafana-oss:dev registry.tsst.xyz:5000/grafana/grafana-oss:dev

docker images

docker push registry.tsst.xyz:5000/grafana/grafana-oss:dev
```
