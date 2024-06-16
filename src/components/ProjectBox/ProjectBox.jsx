import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import "./ProjectBox.css";

function ProjectBox({ projectPhoto, projectName }) {
  const desc = {
    IndiaPAYDesc:
      "I developed a Node.js Payment Microservice that integrates RazorPay for payment processing and uses webhooks to capture payment statuses. It also stores lead information in Zoho CRM for efficient customer management. This solution streamlines both payment workflows and customer relationship tracking.",
    IndiaPAYGithub:
      "https://github.com/UditNayak/Backend-Payment-Micro-Services",
    IndiaPAYWebsite:
      "https://github.com/UditNayak/Backend-Payment-Micro-Services",

    ImageEditorDesc:
      "I created a Java CLI Image Editor using the BufferedImage library, offering features like grayscale conversion, rotation, brightness adjustment, inversion, blurring, edge detection, and special effects.",
    ImageEditorGithub: "https://github.com/UditNayak/Image-Editor-Java",
    ImageEditorWebsite: "https://github.com/UditNayak/Image-Editor-Java",

    AerofitDesc:
      "I developed a business case study on Aerofit Data using Exploratory Data Analysis (EDA) to help categorize the right customers for their projects. This data science project enhances customer segmentation and targeting strategies.",
    AerofitGithub: "https://github.com/UditNayak/Aerofit-Business-Case-Study",
    AerofitWebsite: "https://github.com/UditNayak/Aerofit-Business-Case-Study",

    Scrape_N_ShopDesc:
      "I created a Python web scraper using BeautifulSoup that extracts product details from various websites. It helps users make informed purchasing decisions by comparing prices and features across different platforms.",
    Scrape_N_ShopGithub: "https://github.com/UditNayak/Price-Comparison",
    Scrape_N_ShopWebsite: "https://github.com/UditNayak/Price-Comparison",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectBox;
