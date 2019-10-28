# Registration form in Material-UI

This is an example of registration form made with Material-UI framework.
It uses client side **native html validation**, and **Context API** to store my state and distribute it across different components.

Restrictions I have provided for different fields:

- username (minLength:3, maxLength:20)
- email (email type validation)
- password (minLength:6, maxLength:20)
- birthdate (at least 18 years old)
- bio (maxLength: 200)
- website (url type validation)
- newsletter (optional)
- acceptTerms (required to finish whole registration process)
