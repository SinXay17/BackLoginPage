# BackLoginPage

ລະບົບ ລົງທະບຽນ / ເຂົ້າສູ່ລະບົບ ແບບ Full-Stack ພ້ອມ REST API ແລະ ຖານຂໍ້ມູນຈິງ

## ຄຸນສົມບັດ

- **ລົງທະບຽນ** — ກວດອີເມວຊ້ຳ ແລ້ວ hash ລະຫັດຜ່ານດ້ວຍ bcrypt (salt 10 ຮອບ) ກ່ອນບັນທຶກ
- **ເຂົ້າສູ່ລະບົບ** — ກວດລະຫັດຜ່ານແລ້ວອອກ JWT token ອາຍຸ 1 ຊົ່ວໂມງ
- ເກັບຂໍ້ມູນລັບໄວ້ໃນ `.env` ບໍ່ຝັງໃນໂຄ້ດ
- ເປີດ CORS ໃຫ້ frontend ເອີ້ນ API ໄດ້

## ເຕັກໂນໂລຊີ

**Backend** `Node.js` `Express 5` `TypeScript` `PostgreSQL` `bcryptjs` `jsonwebtoken`
**Frontend** `TypeScript` `HTML` `CSS` `Fetch API`

## API

| Method | Endpoint | ໜ້າທີ່ |
|---|---|---|
| `POST` | `/api/auth/register` | ລົງທະບຽນຜູ້ໃຊ້ໃໝ່ |
| `POST` | `/api/auth/login` | ເຂົ້າສູ່ລະບົບ ແລະ ຮັບ token |

## ວິທີຕິດຕັ້ງ

​```bash
cd ts-backend
npm install
​```

ສ້າງໄຟລ໌ `ts-backend/.env`:

​```env
DB_USER=postgres
DB_HOST=localhost
DB_DATABASE=your_database
DB_PASSWORD=your_password
DB_PORT=5432
JWT_SECRET=your_secret_key
PORT=5000
​```

ສ້າງຕາຕະລາງໃນ PostgreSQL:

​```sql
CREATE TABLE users (
  id       SERIAL PRIMARY KEY,
  username VARCHAR(50)  NOT NULL,
  email    VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
​```

ຣັນ server:

​```bash
npm run dev
​```

ແລ້ວເປີດ `index.html` ດ້ວຍ browser

## ໂຄງສ້າງ

​```
index.html                          ໜ້າ Login / Register
c.css                               ສະໄຕລ໌
src/app.ts                          ໂຄ້ດ frontend (ເອີ້ນ API)
ts-backend/
  src/index.ts                      ຈຸດເລີ່ມຕົ້ນ server
  src/config/db.ts                  ຕັ້ງຄ່າ PostgreSQL pool
  src/controllers/authController.ts  logic ລົງທະບຽນ / ເຂົ້າສູ່ລະບົບ
​```

## ສິ່ງທີ່ໄດ້ຮຽນຮູ້

ເກັບລະຫັດຜ່ານໃຫ້ປອດໄພດ້ວຍ hashing, ໃຊ້ JWT ຈັດການ session, ແຍກ config ອອກຈາກໂຄ້ດດ້ວຍ environment variables ແລະ ຕໍ່ frontend ກັບ backend ຜ່ານ REST API
