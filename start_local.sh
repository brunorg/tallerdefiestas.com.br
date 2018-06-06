#!/usr/bin/env bash
# 

set -o errexit
set -o pipefail
set -o nounset
set -o xtrace

# Set magic variables for current file & dir
__dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
__file="${__dir}/$(basename "${BASH_SOURCE[0]}")"
__base="$(basename ${__file} .sh)"
__root="$(cd "$(dirname "${__dir}")" && pwd)" # <-- change this as it depends on your app

docker run -d \
  -it \
  --name tallerdefiestas-site \
  --hostname=tallerdefiestas.com.br \
  -p 8080:80 \
  --mount type=bind,source="${__dir}"/content,target=/usr/share/nginx/html \
  nginx:latest