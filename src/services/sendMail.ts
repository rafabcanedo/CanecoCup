import axios from 'axios';

export const sendContactMail = async (nome, senderMail, phone) => {
 const data = {
  nome,
  senderMail,
  phone
 };

 try {
  return await axios.post('/api/contact', data);
 } catch (error) {
    return error;
 }
}