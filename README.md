# RESOLVE CODEBASE

## Dropbox link for Sprint 1: 
https://www.dropbox.com/scl/fi/veld0z0ucdf0knniomo2c/final-demo.mp4?rlkey=m6i7iue9grx2s1wgdnm83626h&st=50irgy5s&dl=0

This project is based on requirements requested by a client and consists of three main dirs:
1. `app` - Your web app, built with [React](https://react.dev/reference/react) and [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).
2. `e2e-tests` - [Playwright](https://playwright.dev/) tests for the React web app.
3. `blog` - Your blog / docs, built with [Astro](https://docs.astro.build) based on [Starlight](https://starlight.astro.build/).

For more details, check READMEs of each respective directory!

## Setup Instructions

To run your new app, follow the instructions below:

  1. Position into app's root directory:
    cd resolve/app

  2. Run the development database (and leave it running):
    wasp db start

  3. Open new terminal window (or tab) in that same dir and continue in it.

  4. Apply initial database migrations:
    wasp db migrate-dev

  5. Create initial dot env file from the template:
    cp .env.server.example .env.server

  6. Last step: run the app!
    wasp start

Check the links for additional guidance and the link to documentation!

### Software Development Plan for Educational Platform

---

#### **1. Project Overview**

The goal of this project is to develop a comprehensive educational platform tailored for students, enabling them to access educational resources, manage rentals, and engage in marketplace transactions. The platform will serve as a one-stop solution for students, providing:

- **Access to Educational Resources:** Students can access a wide range of books online, enhancing their learning experience.
- **Rental System:** A feature to facilitate apartment rentals, making it easier for students to find affordable housing.
- **Marketplace:** A platform for students to buy and sell goods, fostering a community-driven ecosystem.
- **Payment Processing:** Secure and seamless payment options for all transactions.
- **User Engagement:** Features like reviews and ratings to build trust and improve user experience.

The platform aims to simplify students' lives by consolidating essential services into a single, user-friendly interface. It will also promote collaboration and resource sharing among students, making education more accessible and affordable.

---

#### **2. Requirements Analysis**

##### **Functional Requirements**

1. **User Registration and Profile Management:**
   - User registration with email/social media authentication.
   - Profile customization (name, profile picture, educational institution, etc.).
   - Password recovery and account security features.

2. **Book Access and School Access:**
   - Search and browse books by category, author, or institution.
   - Integration with educational institutions for access to specific resources.
   - Bookmarking and offline access for selected books.

3. **Rental System:**
   - Listing apartments with details (location, price, availability, etc.).
   - Search and filter options for rentals.
   - Booking and payment integration for rentals.

4. **Marketplace Features:**
   - Posting and browsing items for sale/purchase.
   - Chat functionality for buyer-seller communication.
   - Listing management (edit, delete, mark as sold).

5. **Payment Processing and Security Measures:**
   - Integration with secure payment gateways (e.g., Stripe, PayPal).
   - Multi-factor authentication (MFA) for transactions.
   - Data encryption for sensitive information.

6. **User Reviews and Ratings:**
   - Review and rating system for books, rentals, and marketplace items.
   - User reputation tracking based on reviews.

##### **Non-Functional Requirements**

1. **Scalability:**
   - The platform must handle a growing number of users and transactions without performance degradation.
2. **Security:**
   - Compliance with data protection regulations (e.g., GDPR, CCPA).
   - Regular security audits and vulnerability testing.
3. **Performance:**
   - Fast load times (<2 seconds) for pages and transactions.
4. **Usability:**
   - Intuitive UI/UX design with accessibility features (e.g., screen reader support).
5. **Availability:**
   - 99.9% uptime with robust disaster recovery plans.

---

#### **3. System Architecture**

##### **Definition and Importance**

System architecture refers to the fundamental structure of a software system, encompassing its components, the relationships between these components, and the principles and guidelines governing their design and evolution. It acts as a blueprint for the system, defining how different parts of the software will interact, communicate, and function together to achieve the desired outcomes.

In the context of the overall system development, system architecture is crucial for several reasons:

1. **Guiding Development:** It provides a clear roadmap for developers, ensuring that everyone understands the system's structure and how their work fits into the bigger picture.
2. **Ensuring Scalability:** A well-designed architecture allows the system to grow and adapt to increasing user demands without compromising performance.
3. **Enhancing Maintainability:** A modular and well-documented architecture makes it easier to update, fix, or extend the system over time.
4. **Mitigating Risks:** By anticipating potential challenges and defining robust solutions, the architecture helps minimize risks associated with system failures or security breaches.
5. **Facilitating Collaboration:** It enables different teams (e.g., front-end, back-end, QA) to work in harmony by providing a shared understanding of the system's components and interactions.

##### **Components of System Architecture**

The system architecture of the educational platform comprises several key components, each playing a vital role in ensuring the system's functionality and performance.

1. **Hardware:**
   - **Servers:** Physical or virtual machines that host the application and database. For scalability, cloud-based servers (e.g., AWS EC2) are preferred.
   - **Storage:** High-capacity storage solutions (e.g., AWS S3) are needed to store books, user data, and media files.
   - **Networking Devices:** Routers, switches, and load balancers ensure efficient data transmission and distribution across the system.

2. **Software:**
   - **Front-end:** Built using React.js, the front-end handles user interactions and presents data in an intuitive manner.
   - **Back-end:** Developed with Node.js and Express, the back-end manages server-side logic, API integrations, and database interactions.
   - **Database Management Systems (DBMS):** PostgreSQL handles structured data, while MongoDB manages unstructured data like user reviews and marketplace listings.

3. **Networking Elements:**
   - **API Gateways:** Facilitate communication between different subsystems, ensuring secure and efficient data exchange.
   - **Firewalls:** Protect the system from unauthorized access and cyber threats.
   - **Load Balancers:** Distribute incoming traffic evenly across multiple servers to prevent overloading and ensure high availability.

4. **Subsystems:**
   - **User Management Subsystem:** Handles user registration, authentication, and profile management.
   - **Book Access Subsystem:** Manages book uploads, downloads, and institution-specific access.
   - **Rental Subsystem:** Facilitates apartment listings, bookings, and payments.
   - **Marketplace Subsystem:** Enables users to post, browse, and purchase items.
   - **Payment Subsystem:** Integrates with payment gateways to process transactions securely.

These subsystems interact through well-defined APIs, ensuring seamless communication and data exchange. For example, the Rental Subsystem might call the Payment Subsystem to process a booking, while the User Management Subsystem provides authentication details for secure transactions.

##### **Design Principles**

Design principles are foundational guidelines that ensure the system architecture is robust, scalable, and maintainable. Key principles include:

1. **Scalability:**
   - The architecture must accommodate growing user numbers and transaction volumes. For instance, using cloud-based services like AWS allows for horizontal scaling (adding more servers) and vertical scaling (upgrading server capabilities).

2. **Reliability:**
   - The system should be highly available with minimal downtime. Techniques like redundancy (duplicating critical components) and failover mechanisms (switching to backup systems in case of failure) enhance reliability.

3. **Maintainability:**
   - Modular design, where each component has a clear purpose and minimal dependencies, simplifies updates and troubleshooting. For example, separating the front-end and back-end into distinct layers makes it easier to update the UI without affecting the server-side logic.

4. **Security:**
   - Data encryption, secure authentication mechanisms (e.g., OAuth), and regular security audits protect user data and prevent breaches.

5. **Performance:**
   - Optimizing database queries, using caching mechanisms (e.g., Redis), and minimizing network latency ensure fast response times.

##### **Architectural Patterns and Styles**

Architectural patterns provide reusable solutions to common design challenges. Some common patterns include:

1. **Layered Architecture:**
   - Divides the system into layers (e.g., presentation, business logic, data access). Each layer has a specific role, enhancing modularity and maintainability.

2. **Microservices Architecture:**
   - Breaks the system into small, independent services that communicate via APIs. This approach improves scalability and allows teams to work on different services concurrently.

3. **Client-Server Architecture:**
   - Separates the client (user interface) from the server (data processing). This is ideal for systems with multiple clients accessing shared resources.

4. **Event-Driven Architecture:**
   - Uses events to trigger and communicate between services. Suitable for real-time systems like marketplaces or rental platforms.

Each pattern has its strengths and use cases. For instance, the educational platform could adopt a hybrid approach, using layered architecture for the back-end and microservices for the rental and marketplace subsystems.

##### **Documentation and Visualization**

Documenting system architecture is essential for clarity and collaboration. Key methods include:

1. **Diagrams:**
   - Use UML diagrams (e.g., class, sequence, deployment) to visualize components and interactions.
   - Entity-Relationship Diagrams (ERDs) for database design.

2. **Charts:**
   - Flowcharts to illustrate data flow and decision-making processes.
   - Gantt charts for project timelines.

3. **Tools:**
   - Tools like Lucidchart, Draw.io, and Visio simplify diagram creation and maintenance.

##### **Real-World Applications**

Real-world examples demonstrate the practical application of system architecture concepts. For instance:

- **Amazon:** Uses a microservices architecture to handle millions of transactions daily. Each service is independent, enabling rapid updates and scalability.
- **Netflix:** Employs a hybrid architecture combining microservices and event-driven design to deliver streaming content efficiently.

Analyzing these systems reveals strengths (e.g., scalability, flexibility) and weaknesses (e.g., complexity, potential for service failures).

##### **Future Trends**

Emerging trends like cloud computing, edge computing, and serverless architecture are reshaping system design:

1. **Cloud Computing:**
   - Enables scalable, cost-effective hosting and storage solutions.

2. **Edge Computing:**
   - Processes data closer to the source, reducing latency and bandwidth usage.

3. **Serverless Architecture:**
   - Eliminates the need to manage servers, allowing developers to focus on coding.

These trends will likely influence future designs by promoting scalability, efficiency, and cost-effectiveness.

In conclusion, system architecture is a critical aspect of software development, ensuring that the educational platform is robust, scalable, and user-friendly. By adhering to design principles, leveraging architectural patterns, and staying abreast of emerging trends, the platform can deliver a seamless and secure experience for students.

#### **4. Project Timeline**

| **Phase**               | **Start Date** | **End Date** | **Duration** |
|--------------------------|----------------|--------------|--------------|
| Requirement Gathering    | 23 Dec 2024    | 30 Dec 2024  | 1 week       |
| Design Phase             | 31 Dec 2024    | 13 Jan 2025  | 2 weeks      |
| Development Sprint 1     | 14 Jan 2025    | 27 Jan 2025  | 2 weeks      |
| Development Sprint 2     | 28 Jan 2025    | 10 Feb 2025  | 2 weeks      |
| Development Sprint 3     | 11 Feb 2025    | 24 Feb 2025  | 2 weeks      |
| Testing and QA           | 25 Feb 2025    | 9 Mar 2025   | 2 weeks      |
| Deployment               | 10 Mar 2025    | 11 Mar 2025  | 2 days       |
| Post-Launch Support      | 12 Mar 2025    | 12 Mar 2025  | Ongoing      |

---

#### **5. Risk Management**

| **Risk**                          | **Mitigation Strategy**                          |
|-----------------------------------|-------------------------------------------------|
| Delays in third-party integrations| Early engagement with partners and contingency plans. |
| Security vulnerabilities          | Regular security audits and code reviews.       |
| Resource shortages                | Hiring additional developers if needed.         |
| Performance issues                | Load testing and optimization during development.|
| User adoption challenges          | Marketing and user feedback campaigns.          |

---

#### **6. Team Structure**

| **Role**               | **Responsibilities**                                                                 |
|-------------------------|-------------------------------------------------------------------------------------|
| Project Manager         | Oversee project timeline, budget, and team coordination.                            |
| Front-end Developer     | Develop and maintain the user interface.                                            |
| Back-end Developer      | Implement server-side logic and APIs.                                               |
| UI/UX Designer          | Design intuitive and visually appealing interfaces.                                 |
| QA Engineer             | Perform testing and ensure quality assurance.                                       |
| System Administrator    | Manage cloud infrastructure and ensure system availability.                         |

---

#### **Conclusion**

This Software Development Plan outlines the roadmap for building a robust and scalable educational platform tailored to students' needs. By adhering to the outlined timeline, and architecture, I aim to deliver a high-quality product that meets the client's expectations and enhances the educational experience for students.
----------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------





