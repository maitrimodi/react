const Contact = () => {
  return (
    <div className="p-10">
      <h1 className="font-bold text-3xl p-4 m-4 align-middle justify-center text-center">
        Contact Us
      </h1>
      <p>If you have any questions, feel free to reach out to us!</p>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="name"
            className="border border-black p-2 m-2"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="email"
            className="border border-black p-2 m-2"
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            name="message"
            placeholder="Type your message here..."
            className="border border-black p-2 m-2"
          ></textarea>
        </label>
        <br />
        <button
          type="submit"
          className="border border-black p-2 m-2 bg-gray-100 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
