# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





      CHAPTERS
   [*] Chapter - 1
    -   Overview of project

   [*] Chapter - 2 
    -   Techonologys use 

   [*] Chapter - 3 
    -   Folder Structure

   [*] Chapter - 4 
    -   Project Timeline


                         [-^-] C H A P T E R = 1 [**Overview of project**]

                         @ The Resume Builder App is a 3-page React application that allows users to:
                         - Choose a resume design
                         - Fill in their personal, educational, and professional information.
                         - Download a fully formatted resume as a PDF.
                         - It's ideal for job seekers looking to generate polished resumes quickly and easily.
                         ----------------------------------------------------------------------------------------------------------   
                         
                         
                         [-^-] C H A P T E R = 2 [**Technologys used**]

                         @  This project is built using React.js and modern frontend tools for building a
                            dynamic and printable resume builder app.
                             
                         [1]  React.js libraries used to build app

                            (1)  react	
                            (2)  react-dom	
                            (3)  react-router-dom	
                            (4)  react-bootstrap	
                            (5)  bootstrap	
                            (6)  react-icons
                         -----------------------------------------------------------------------------------------------------------
                         [-^-]  C H A P T E R = 3 [** Folder Structure**]  

                         @ Resume-Demo/
                           │
                           ├── node_modules/
                           ├── public/
                           │   └── index.html
                           │
                           ├── src/
                           │   ├── assets/                 # (This file for images, fonts, icons, etc.)
                           │
                           │   ├── layout/                  # (Layout components like header, footer & main-layout)
                           │   │   ├── Footer.jsx     => done
                           │   │   ├── Footer.css     => done
                           │   │   ├── Header.jsx     => done
                           │   │   ├── Header.css     => done
                           │   │   └── Mainlayout.jsx => done
                           │
                           │   ├── pages/                   # (Different Pages of your app)
                           │   │   ├── Designs.jsx
                           │   │   ├── Designs.css
                           │   │   ├── DownloadSection.jsx
                           │   │   ├── DownloadSection.css
                           │   │   ├── Form.jsx
                           │   │   ├── Form.css
                           │   │   ├── Front.jsx
                           │   │   ├── Front.css
                           │
                           │   ├── App.jsx                  # Root app component
                           │   ├── App.css                  # Styling for App.jsx
                           │   ├── index.css                # Global CSS
                           │   ├── main.jsx                 # ReactDOM render file
                           │
                           ├── .gitignore
                           ├── eslint.config.js
                           ├── index.html                   # (again inside public/)
                           ├── package.json
                           ├── package-lock.json
                           ├── README.md
                           ├── vite.config.js               # (means you are using Vite ⚡)


                         -----------------------------------------------------------------------------------------------------------


                          [-^-]  C H A P T E R = 4 [** Project Timeline**]  
                          
                             Date    |      Event [ Milestone ]              |         Description

                          2025-04-28 | Project starting set up project       | Team meeting and initial planning. => done 

                          2025-04-28 | Ready with design                     | 	Finalize early UI/UX designs for testing and approval. 

                          2025-04-29 | Developement Page :  1 & 2 & 3        | Present the product to the client.

                          2025-05-01 | Now projet is ready for testing.      | The product.
                           
                          2025-05-02 | Final Delivery                        | Full project completion and delivery.


                        -------------------------------------------------------------------------------------------------------------
