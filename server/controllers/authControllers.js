import jwt from 'jsonwebtoken';
import { users } from '../database.js';

export async function login(req, res) {
  const { user, password } = req.body;
  const foundUser = users.find(u => u.user === user);

  if (!foundUser) {
    return res.status(401).json({ message: "Usuario no encontrado" });
  }


  if (password !== foundUser.password) {
    return res.status(401).json({ message: "Contraseña incorrecta" });
  }

  const token = jwt.sign({ userId: foundUser.id }, 'your_secret_key', { expiresIn: '1h' });
const userName = foundUser.user;

  res.json({ token,userName });
}
