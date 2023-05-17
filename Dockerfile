# Use a imagem base do Node.js
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta que será usada pelo aplicativo
EXPOSE 3000

# Comando para iniciar o aplicativo quando o contêiner for iniciado
CMD [ "npm", "start" ]
