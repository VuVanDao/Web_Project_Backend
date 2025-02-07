# Sử dụng Node.js phiên bản Alpine nhẹ hơn
FROM node:14-alpine

# Đặt thư mục làm việc
WORKDIR /vuvandao/backend

# Sao chép package.json và package-lock.json trước để cache dependencies
COPY package*.json ./

# Cài đặt dependencies, ưu tiên cài production dependencies để tối ưu dung lượng image
RUN npm install 

RUN npm install -g @babel/core @babel/cli

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Chạy build nếu script build-src đã tồn tại trong package.json
RUN npm run build-src

# Chạy ứng dụng (nếu ứng dụng chạy bằng npm start)
CMD ["npm", "start","build"]