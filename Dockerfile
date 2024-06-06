#RUN npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
#下载项目文件的node_modules
FROM node:18 as build
# RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
# RUN echo 'Asia/Shanghai' >/etc/timezone
# ARG env
# # 切换为阿里源
# RUN npm config set registry https://registry.npmmirror.com/

# WORKDIR /web

# COPY . .

# RUN npm install --force

# RUN npm run build:${env} 



# 切换为阿里源
RUN npm config set registry https://registry.npmmirror.com/

WORKDIR /webapp

COPY package.json ./

COPY package-lock.json ./

RUN npm install --force


#获取生产文件
FROM node:18 as builddist
ARG env

WORKDIR /web

COPY --from=build /webapp/node_modules  ./node_modules

COPY . .

RUN npm run build:${env}

#下载生产的node_modules
FROM node:18 as distnodemodules

# 切换为阿里源
RUN npm config set registry https://registry.npmmirror.com/

WORKDIR /web

COPY package.json ./

COPY package-lock.json ./

RUN  npm install --production --force


#产出生产镜像
FROM node:18-alpine

#设置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo 'Asia/Shanghai' >/etc/timezone

WORKDIR /web

COPY --from=distnodemodules /web/node_modules ./node_modules

# COPY --from=builddist /web/.nuxt ./.nuxt
COPY --from=builddist /web/.output ./.output
# COPY --from=builddist /web/.nuxt ./.nuxt

COPY . .


# 暴露端口映射
# EXPOSE 3000
ENTRYPOINT command npm run server


