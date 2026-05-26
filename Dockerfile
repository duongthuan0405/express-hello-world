FROM node:24-alpine3.22

WORKDIR /app

# copy package trước để cache layer
COPY package*.json ./

# cài production deps
RUN npm install --omit=dev

# copy source
COPY . .

# tạo user không root (best practice)
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 -G nodejs && \
    chown -R nodejs:nodejs /app

USER nodejs

EXPOSE 3001

CMD ["npm", "start"]