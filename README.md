# SynthChat

SynthChat is full-stack AI chat application powered by ChatGPT, featuring a sleek interface with Tailwind CSS, intelligent responses from OpenAI, and structured data storage via MongoDB.

## Deployment
App is now live at [https://jltysc-8000.csb.app](https://jltysc-8000.csb.app)

## Usage

- **Clone the repository**:
  
  ```bash
  git clone https://github.com/avisek/synth-chat.git
  cd synth-chat
  ```

- **This project uses `pnpm` package manager. To install `pnpm`, run**:
  
  ```bash
  npm install -g pnpm
  ```

- **Install project dependencies**:
  
  ```bash
  pnpm i
  ```

- **Setup environment variables**: Create a `.env.local` file at the root directory. And write the required environment variables.
  
  ```env
  MONGODB_URL=XXX
  OPENAI_API_KEY=XXX
  OPENAI_ORGANIZATION_ID=XXX
  JWT_SECRET=XXX
  COOKIE_SECRET=XXX
  ```

- **Start the dev server**:
  
  ```bash
  pnpm dev
  ```

- **Access the Application**:
  
  Press <kbd>o</kbd> to open the application on your web browser or navigate to this url: [http://localhost:3000/](http://localhost:3000/)

- **Build the production package**:
  
  ```bash
  pnpm build
  ```

- **Run the production package**:
  
  ```bash
  pnpm start
  ```

## License

This project is licensed under the [MIT License](LICENSE).
