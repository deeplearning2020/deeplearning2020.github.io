import Image from "next/image";
import { 
  FaGithub, FaLinkedin, FaTwitter, FaPython, FaDocker, FaAws, 
  FaReact, FaBrain, FaDatabase, FaCode, FaCloud, FaServer, 
  FaAtom, FaJenkins, FaBars, FaVial, FaChartBar, FaNetworkWired,
  FaJs, FaTerminal, FaShieldAlt, FaRobot
} from 'react-icons/fa';
import { 
  SiPytorch, SiTensorflow, SiScikitlearn, SiOpencv, SiKubernetes, 
  SiTerraform, SiMongodb, SiMysql, SiApachehadoop, SiApachespark, 
  SiApacheairflow, SiDuckdb, SiPolars, SiFlask, SiDjango, SiFastapi, 
  SiAwslambda, SiApachekafka, SiRedis, SiWeightsandbiases, 
  SiPostman, SiPrometheus, SiGrafana, SiGraphql, SiRabbitmq, 
  SiPostgresql, SiDatadog, SiOnnx, SiApachejmeter, SiCypress, 
  SiPytest, SiSelenium, SiAppium, SiWebrtc
} from 'react-icons/si';
import { TbGraph, TbBrain } from 'react-icons/tb';
import { BiMemoryCard } from 'react-icons/bi';
import { GiSwordSpade } from 'react-icons/gi';
import { ThemeToggle } from '@/components/ThemeToggle';
import { 
  SiBurpsuite, SiWireshark, SiKalilinux, SiMetasploit 
} from 'react-icons/si';
import { GiNinjaHeroicStance } from 'react-icons/gi';
import Link from 'next/link';

// Add this new component after the existing helper components
const NewsItem = ({ date, title, description }: { date: string; title: string; description: string }) => (
  <div className="flex items-start gap-2 py-0.5">
    <div className="text-[11px] md:text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap min-w-[50px] md:min-w-[60px] shrink-0">
      {date}
    </div>
    <div className="min-w-0 text-[11px] md:text-xs">
      <span className="font-medium">{title}</span>
      <span className="text-gray-600 dark:text-gray-300 ml-1 break-words line-clamp-2 md:line-clamp-none">
        — {description}
      </span>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Background mesh pattern overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      
      {/* Hero Section with About Me and News */}
      <section id="home" className="pt-24 md:pt-32 pb-12 md:pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Profile and About */}
            <div className="flex-1 flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="w-32 h-32 md:w-48 md:h-48 relative rounded-full overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Yeahia Sarker"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 128px, 192px"
                  quality={85}
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                  Yeahia Sarker
                </h2>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-4 md:mb-6">
                  ML Research & Development Engineer
                </p>
                <div className="prose dark:prose-invert max-w-2xl">
                  <p className="text-base md:text-lg">
                    Skilled in working with attention models, graph networks, and generative AI. 
                    I enjoy exploring new advancements in AI and contributing to open-source projects. 
                    Currently focused on creating real-time recommendation systems for better user experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* News Section - Now side by side on desktop */}
            <div className="lg:w-80 lg:border-l lg:border-gray-200 dark:lg:border-gray-700 lg:pl-6">
              <h2 className="text-xs md:text-sm font-semibold mb-1 md:mb-2">
                Latest Updates
              </h2>
              <div className="space-y-0.5 max-h-[140px] md:max-h-[200px] overflow-y-auto 
                            pr-1 md:pr-4 border-l lg:border-l-0 border-gray-200 dark:border-gray-700 
                            pl-2 md:pl-4 lg:pl-0 scrollbar-thin">
                <NewsItem 
                  date="Jan 22"
                  title="Paper Submitted"
                  description="Submitted a paper on energy-based models in ICIP 2025."
                />
                <NewsItem 
                  date="Dec 1"
                  title="Job Placement"
                  description="Joined Robi Axiata Ltd. as a Machine Learning Expert (Engineering Manager - I)."
                />
                <NewsItem 
                  date="Nov 30"
                  title="Left Job"
                  description="Left the job as the Head of AI from Alice Lab Ptd."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section - Reorganized with sub-boxes */}
      <section className="py-8 md:py-12 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* ML & AI Box */}
            <div className="bg-white/50 dark:bg-gray-900/50 p-4 md:p-6 rounded-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
                <FaBrain className="text-blue-600" />
                Machine Learning & AI
              </h3>
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                <TechItem icon={SiPytorch} name="PyTorch" />
                <TechItem icon={SiTensorflow} name="TensorFlow" />
                <TechItem icon={FaAtom} name="JAX" />
                <TechItem icon={SiOpencv} name="OpenCV" />
                <TechItem icon={SiOnnx} name="ONNX" />
                <TechItem icon={TbBrain} name="LlamaIndex" />
                <TechItem icon={SiWeightsandbiases} name="W&B" />
                <TechItem icon={FaRobot} name="Ollama" />
                <TechItem icon={FaDatabase} name="Pinecone" />
              </div>
            </div>

            {/* Data Engineering Box */}
            <div className="bg-white/50 dark:bg-gray-900/50 p-4 md:p-6 rounded-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
                <FaDatabase className="text-blue-600" />
                Data Engineering
              </h3>
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                <TechItem icon={SiApachespark} name="Spark" />
                <TechItem icon={SiApachehadoop} name="Hadoop" />
                <TechItem icon={SiApacheairflow} name="Airflow" />
                <TechItem icon={SiApachekafka} name="Kafka" />
                <TechItem icon={SiRabbitmq} name="RabbitMQ" />
                <TechItem icon={SiRedis} name="Redis" />
                <TechItem icon={SiMongodb} name="MongoDB" />
                <TechItem icon={SiMysql} name="MySQL" />
                <TechItem icon={SiPostgresql} name="PostgreSQL" />
              </div>
            </div>

            {/* Cloud & DevOps Box */}
            <div className="bg-white/50 dark:bg-gray-900/50 p-4 md:p-6 rounded-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
                <FaCloud className="text-blue-600" />
                Cloud & DevOps
              </h3>
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                <TechItem icon={SiKubernetes} name="Kubernetes" />
                <TechItem icon={FaDocker} name="Docker" />
                <TechItem icon={SiTerraform} name="Terraform" />
                <TechItem icon={FaAws} name="AWS" />
                <TechItem icon={FaCloud} name="GCP" />
                <TechItem icon={FaCloud} name="Azure" />
                <TechItem icon={FaCloud} name="SageMaker" />
                <TechItem icon={FaJenkins} name="Jenkins" />
                <TechItem icon={SiDatadog} name="Datadog" />
              </div>
            </div>

            {/* Software Development Box */}
            <div className="bg-white/50 dark:bg-gray-900/50 p-4 md:p-6 rounded-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
                <FaCode className="text-blue-600" />
                Software Development
              </h3>
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                <TechItem icon={FaPython} name="Python" />
                <TechItem icon={FaJs} name="JavaScript" />
                <TechItem icon={FaTerminal} name="Bash" />
                <TechItem icon={FaReact} name="React/Next.js" />
                <TechItem icon={FaCode} name="Node.js" />
                <TechItem icon={SiFastapi} name="FastAPI" />
                <TechItem icon={SiDjango} name="Django" />
                <TechItem icon={SiGraphql} name="GraphQL" />
                <TechItem icon={SiWebrtc} name="WebRTC" />
              </div>
            </div>

            {/* New Software Testing Box */}
            <div className="bg-white/50 dark:bg-gray-900/50 p-4 md:p-6 rounded-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
                <FaVial className="text-blue-600" />
                Software Testing
              </h3>
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                <TechItem icon={SiPostman} name="Postman" />
                <TechItem icon={SiApachejmeter} name="JMeter" />
                <TechItem icon={GiSwordSpade} name="Vegeta" />
                <TechItem icon={SiPytest} name="PyTest" />
                <TechItem icon={SiCypress} name="Cypress" />
                <TechItem icon={SiSelenium} name="Selenium" />
                <TechItem icon={SiAppium} name="Appium" />
                <TechItem icon={FaCode} name="Locust" />
                <TechItem icon={FaCode} name="Gatling" />
              </div>
            </div>

            {/* New Software Security Box */}
            <div className="bg-white/50 dark:bg-gray-900/50 p-4 md:p-6 rounded-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
                <GiNinjaHeroicStance className="text-blue-600" />
                Software Security
              </h3>
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                <TechItem icon={SiBurpsuite} name="Burp Suite" />
                <TechItem icon={SiMetasploit} name="Metasploit" />
                <TechItem icon={FaNetworkWired} name="Nmap" />
                <TechItem icon={SiWireshark} name="Wireshark" />
                <TechItem icon={SiKalilinux} name="Kali Linux" />
                <TechItem icon={FaShieldAlt} name="Firewall" />
                <TechItem icon={FaCode} name="OWASP ZAP" />
                <TechItem icon={FaCode} name="Hydra" />
                <TechItem icon={FaCode} name="Sqlmap" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-base md:text-lg">Yeahia Sarker</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                ML Research & Development Engineer
              </p>
            </div>
            <div className="flex space-x-4 md:space-x-6">
              <SocialLink href="https://github.com" icon={FaGithub} label="GitHub" />
              <SocialLink href="https://linkedin.com" icon={FaLinkedin} label="LinkedIn" />
              <SocialLink href="https://twitter.com" icon={FaTwitter} label="Twitter" />
            </div>
          </div>
          <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Yeahia Sarker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Components
const TechItem = ({ icon: Icon, name }: { icon: any; name: string }) => (
  <div className="flex flex-col items-center text-center group">
    <Icon className="text-3xl mb-1.5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
    <span className="font-medium text-sm">{name}</span>
  </div>
);

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
  >
    <Icon className="text-2xl" />
  </a>
);

// Add this helper component for navigation links
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200"
  >
    {children}
  </Link>
);
