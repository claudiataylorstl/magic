import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function Home() {
    return (
        <div className="text-white">
            <motion.div
                whileHover={{ scale: 1.2 }}
                onHoverStart={event => {}}
                onHoverEnd={event => {}}
            >
                <Link to="/you" className="text-white text-decoration-none">YOU</Link>
            </motion.div>
            <p>ARE</p>
            <p>MAGIC</p>
        </div>
    );
}

export default Home;