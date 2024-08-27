# Namaste React - Day 1 🚀

## Introduction to React

React is a powerful JavaScript library for building user interfaces, developed by Facebook. It excels at creating fast and interactive web applications, particularly single-page applications.

## Key Concepts 

### 1. What is a CDN (Content Delivery Network)?

A **CDN (Content Delivery Network)** is a system of distributed servers that deliver web content to a user based on their geographic location. CDNs help improve the performance, speed, and reliability of a website by reducing the distance between the server and the user.

- **How it works:**
  - When a user requests a web page, the CDN delivers the content from the server closest to the user, reducing load times and latency.
  - CDNs are widely used to deliver assets like images, videos, stylesheets, and scripts.

- **Example:**
  - React and other libraries can be delivered via CDN, allowing you to quickly include them in your projects without needing to install them locally.

### 2. What does "cross-origin" mean?

**Cross-Origin** refers to when a web page or resource is accessed from a different domain, protocol, or port than the one currently being used. This is common in web development when resources like images, fonts, or APIs are hosted on different domains.

- **Same-Origin Policy:**
  - Browsers enforce a security measure called the "Same-Origin Policy," which restricts how resources on one origin can interact with resources from another origin to prevent malicious attacks.

- **Cross-Origin Resource Sharing (CORS):**
  - CORS is a mechanism that allows servers to specify who can access their resources from different origins. It is implemented via HTTP headers.

- **Example:**
  ```html
  <script src="https://example.com/some-script.js" crossorigin></script>
