import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Form = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  function sendEmai(e) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      name: name,
      email: email,
      phone: phone,
      city: city,
    };

    emailjs.send("service_6cdsb3m", "template_uumzsgm", templateParams, "3JoIMTQdW0zF9jOFj").then(
      (response) => {
        console.log("Dados enviados!", response.status, response.text);
        setName('');
        setEmail('');
        setPhone('');
        setCity('');
        navigate("/thanks");
      }, (error) => {
        console.log("Erro", error);
      });
  }

  return (
    <section className="bg-white h-full shadow shadow-black">
      <div className="py-12 px-4 max-w-3xl mx-auto my-auto">
        <form onSubmit={sendEmai} className="bg-white shadow-lg rounded-md p-8 mb-4">
          <h5 className="text-xl pb-10 font-medium text-gray-900 text-center">
            Inscreva-se para receber novos lançamentos
          </h5>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Seu Nome
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-base text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Seu Email
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phone"
                id="phone"
                className="block py-2.5 px-0 w-full text-base bg-transparent border-0 border-b-2  appearance-none text-gray-900 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              <label
                htmlFor="phone"
                className="peer-focus:font-medium absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Seu WhatsApp (opcional)
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="city"
                id="city"
                className="block py-2.5 px-0 w-full text-base bg-transparent border-0 border-b-2  appearance-none text-gray-900 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
              <label
                htmlFor="city"
                className="peer-focus:font-medium absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Sua Cidade (opcional)
              </label>
            </div>
          </div>
          <div className="flex items-start mb-5 group">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border rounded-lg focus:ring-3 bg-gray-700 border-gray-300 focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="terms"
              className="ms-2 text-sm font-medium text-gray-900">
              Eu aceito receber informações de novos lançamentos{" "}
            </label>
          </div>
          <input type="submit" value="Inscrever-se" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" />
        </form>
      </div>
    </section>
  );
};

export default Form;
