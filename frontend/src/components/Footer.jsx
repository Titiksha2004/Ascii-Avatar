import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer 
      className="py-12 px-4 border-t border-white/10 relative"
      data-testid="footer"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* ASCII Decoration */}
        <motion.div
          className="font-primary text-white/20 text-[10px] mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <pre>{`
    *  .  ·    ✧    ·  .  *
  ·    *    ·    ·    *    ·
    ·  .  ✧  *  ✧  .  ·
          `}</pre>
        </motion.div>

        <motion.p
          className="font-secondary text-xl text-white/60 mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ASCII Human Generator
        </motion.p>

        <motion.p
          className="text-xs text-white/30 tracking-wider uppercase mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Build tiny digital humans with personality and soul
        </motion.p>

        <motion.div
          className="flex justify-center gap-6 text-white/40 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="hover:text-white/60 transition-colors cursor-pointer">
            ✧ dreamcore
          </span>
          <span className="text-white/20">·</span>
          <span className="hover:text-white/60 transition-colors cursor-pointer">
            terminal aesthetic
          </span>
          <span className="text-white/20">·</span>
          <span className="hover:text-white/60 transition-colors cursor-pointer">
            cyber cute ✧
          </span>
        </motion.div>

        <motion.p
          className="text-[10px] text-white/20 mt-8 tracking-widest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Made with {'<3'} and ASCII art
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
