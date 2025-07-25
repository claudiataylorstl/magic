import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function Home() {
    return (
        <div className="bigboyletters text-white vh-100 d-flex flex-column justify-content-center align-items-center" style={{ fontSize: 'inherit' }}>
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTab={{ scale: 0.9 }}
            >
                <Link to="/you" className="bigboyletters text-white text-decoration-none">YOU</Link>
            </motion.div>
            <p className="bigboyletters mb-0">ARE</p>
            <p className="bigboyletters mb-0">MAGIC</p>
        </div>
    );
}

export default Home;