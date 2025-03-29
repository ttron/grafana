# Build docker image

```bash
# go install github.com/google/wire/cmd/wire@latest

# wire gen -tags oss ./pkg/server ./pkg/cmd/grafana-cli/runner

make build-docker-full
docker images

docker tag docker.io/grafana/grafana-oss:dev registry.tsst.xyz:5000/grafana/grafana-oss:dev

docker images

docker push registry.tsst.xyz:5000/grafana/grafana-oss:dev
```
