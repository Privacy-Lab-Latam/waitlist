import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Header() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed left-0 right-0 top-0 z-[50] m-4 flex justify-between">
      <motion.div variants={itemVariants}>
        <Link
          href="https://academy.web3privacy.info/"
          rel="noopener noreferrer"
          target="_blank">
          <Button
            size="sm"
            variant="secondary"
            className="w-full text-center text-yellow-50 transition-all duration-150 ease-linear md:w-auto md:hover:text-yellow-200">
            {/*<SiNotion className="md:mr-1.5" />*/}
            <span className="block">Privacy 101 course</span>
          </Button>
        </Link>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Link href="/about" rel="noopener noreferrer">
          <Button
            size="sm"
            variant="secondary"
            className="w-full text-center text-yellow-50 transition-all duration-150 ease-linear md:w-auto md:hover:text-yellow-200">
            {/*<FaGithub className="md:mr-1.5" /> */}
            <span className="block">About Us</span>
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
