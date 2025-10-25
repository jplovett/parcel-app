// Configuration for the top navigation bar
// Each entry includes a title and a snippet path/file or function to generate dynamic content
export default {
    home: {
        title: "Home", snippet: "/snippets/home.html"
    },
    contact: {
        title: "Contact", snippet: "/snippets/contact.html"
    },
    projects: {
        title: "Projects", snippet: "/snippets/projects.html"
    },
    history: {
        title: "History", snippet: "" // buildHistoryGallerySnippet()
    },
    registration: {
        title: "Dates & Registration", snippet: "/snippets/registration.html"
    }
};