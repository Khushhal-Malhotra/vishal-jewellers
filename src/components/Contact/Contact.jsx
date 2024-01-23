import React, { useState } from "react";
import styles from "./Contact.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await toast.promise(
      fetch("https://formsubmit.co/ajax/kanonili@altmails.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          message: message,
          phone: phone,
        }),
      }),
      {
        pending: "Sending...",
        success: "Message Sent ",
        error: "Message Not Sent ",
      }
    );
    setName("");
    setPhone("");
    setMessage("");
  };
  return (
    <>
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.title}>Message Us</div>
        <div className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo
          tempor, congue justo at, lobortis orci.
        </div>
        <div className={styles.links}>
          <a className={styles.link} href="#">
            {" "}
            <svg
            width="18px"
              height="14px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M1.60175 4.20114C2.14997 3.47258 3.02158 3 4 3H20C20.9784 3 21.85 3.47258 22.3982 4.20113L12 11.7635L1.60175 4.20114Z"
                  fill="#000000"
                ></path>{" "}
                <path
                  d="M1 6.2365V18C1 19.6523 2.34772 21 4 21H20C21.6523 21 23 19.6523 23 18V6.23649L13.1763 13.381C12.475 13.891 11.525 13.891 10.8237 13.381L1 6.2365Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>{" "}
            <span>vishal77gupta81@gmail.com</span>
          </a>
          <a className={styles.link} href="#">
            {" "}
            <svg
              fill="#000000"
              width="18px"
              height="22px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z"></path>
              </g>
            </svg>{" "}
            <span>(+91) 94142 10148</span>
          </a>
        </div>
      </div>
      <form className={styles.contactForm} method="POST" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          id="name"
          name="name"
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="tel"
          value={phone}
          id="phone"
          name="phone"
          placeholder="Phone..."
          onChange={(e) => setPhone(e.target.value)}
          pattern="(0|91)?[6-9][0-9]{9}" required
        />
        <input
          id="message"
          value={message}
          name="message"
          placeholder="Your message..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" value="Submit">
          SEND
        </button>
      </form>
    </div>
      <ToastContainer />
      </>
  );
};

export default Contact;
