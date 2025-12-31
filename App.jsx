app_content = """import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="landing-page">
            <h1>Paradise Nursery</h1>
            <button>Get Started</button>
        </div>
    );
};

export default App;
"""
with open(f"{project_name}/App.jsx", "w") as f:
    f.write(app_content)
