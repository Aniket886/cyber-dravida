import { Zap, Radio, Flag, Search, type LucideIcon } from "lucide-react";

export interface ServicePageData {
  slug: string;
  title: string;
  icon: LucideIcon;
  color: string;
  heroDescription: string;
  overview: string[];
  keyTopics: string[];
  whoItsFor: string;
  resources: { name: string; url: string; description: string }[];
  roadmap: { title: string; description: string }[];
  glossary: { term: string; definition: string }[];
}

export const servicePages: ServicePageData[] = [
  {
    slug: "cybersecurity-training",
    title: "Cybersecurity Training",
    icon: Zap,
    color: "text-secondary",
    heroDescription:
      "Structured courses covering ethical hacking, OSINT, network security, and digital forensics — from beginner to advanced. Build real-world skills that employers demand.",
    overview: [
      "Cybersecurity is one of the fastest-growing fields in technology. Our training programs are designed to take you from zero knowledge to job-ready professional, covering the essential domains of information security.",
      "You'll learn how attackers think and operate, and more importantly, how to defend against them. Our curriculum covers network security, web application security, malware analysis, digital forensics, and incident response.",
      "Each module combines theory with hands-on labs. You'll practice on real vulnerable machines, analyze actual malware samples, and simulate incident response scenarios — the same skills used by security professionals worldwide.",
      "Whether you're a student exploring career options or a working professional looking to transition into cybersecurity, our structured learning paths and mentorship will guide you every step of the way.",
    ],
    keyTopics: [
      "Ethical Hacking",
      "Network Security",
      "Web App Security",
      "Digital Forensics",
      "Malware Analysis",
      "Incident Response",
      "Cryptography",
      "Linux Administration",
    ],
    whoItsFor:
      "Students, IT professionals looking to transition into security, developers wanting to build secure applications, and anyone curious about how cybersecurity works.",
    resources: [
      { name: "TryHackMe", url: "https://tryhackme.com", description: "Gamified platform with guided rooms for beginners to learn cybersecurity hands-on." },
      { name: "Hack The Box", url: "https://www.hackthebox.com", description: "Practice pentesting skills on realistic vulnerable machines and challenges." },
      { name: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/", description: "The definitive list of the most critical web application security risks." },
      { name: "Cybrary", url: "https://www.cybrary.it", description: "Free and paid cybersecurity courses covering certifications and skill paths." },
      { name: "Professor Messer", url: "https://www.professormesser.com", description: "Free video training for CompTIA Security+, Network+, and A+ certifications." },
      { name: "PortSwigger Web Security Academy", url: "https://portswigger.net/web-security", description: "Free interactive labs for learning web security testing with Burp Suite." },
      { name: "SANS Cyber Aces", url: "https://www.cyberaces.org", description: "Free introductory cybersecurity courses from the SANS Institute." },
      { name: "Offensive Security", url: "https://www.offsec.com", description: "Home of OSCP — the gold standard penetration testing certification." },
    ],
    roadmap: [
      { title: "Foundation — Learn the Basics", description: "Start with networking fundamentals (TCP/IP, DNS, HTTP), Linux command line, and basic programming (Python/Bash). Understand how computers and the internet work." },
      { title: "Security Concepts", description: "Learn the CIA triad, common threats, authentication methods, encryption basics, and security frameworks. Get CompTIA Security+ as your first certification." },
      { title: "Hands-On Labs", description: "Set up a home lab with VirtualBox/VMware. Practice on TryHackMe beginner rooms and Hack The Box starting point machines. Learn to use Nmap, Wireshark, and Burp Suite." },
      { title: "Web Application Security", description: "Study OWASP Top 10 vulnerabilities. Practice SQL injection, XSS, CSRF, and authentication bypasses on PortSwigger labs and DVWA." },
      { title: "Network Penetration Testing", description: "Learn active/passive reconnaissance, vulnerability scanning, exploitation with Metasploit, privilege escalation, and post-exploitation techniques." },
      { title: "Digital Forensics & Incident Response", description: "Study disk forensics, memory analysis with Volatility, log analysis, and incident response procedures. Learn to investigate breaches methodically." },
      { title: "Certifications & Career", description: "Pursue advanced certifications like OSCP, CEH, or GPEN. Build a portfolio of write-ups and CTF achievements. Apply for SOC analyst or junior pentester roles." },
    ],
    glossary: [
      { term: "CIA Triad", definition: "The three pillars of information security: Confidentiality (keeping data secret), Integrity (keeping data accurate), and Availability (keeping systems accessible)." },
      { term: "Penetration Testing", definition: "An authorized simulated cyberattack on a system to evaluate its security and identify vulnerabilities before real attackers do." },
      { term: "Vulnerability", definition: "A weakness in a system, application, or process that can be exploited by a threat actor to gain unauthorized access or cause harm." },
      { term: "Exploit", definition: "A piece of code, technique, or method that takes advantage of a vulnerability to compromise a system." },
      { term: "Firewall", definition: "A network security device that monitors and filters incoming and outgoing traffic based on predefined security rules." },
      { term: "IDS/IPS", definition: "Intrusion Detection System (monitors and alerts) and Intrusion Prevention System (monitors and blocks) — tools that detect malicious activity on a network." },
      { term: "Encryption", definition: "The process of converting plaintext data into ciphertext using an algorithm and key, making it unreadable without the decryption key." },
      { term: "Zero-Day", definition: "A vulnerability that is unknown to the vendor and has no patch available, making it extremely dangerous if exploited." },
      { term: "Privilege Escalation", definition: "The act of exploiting a vulnerability to gain higher-level permissions than originally granted, such as moving from a regular user to administrator." },
      { term: "SOC (Security Operations Center)", definition: "A centralized facility where security analysts monitor, detect, and respond to cybersecurity incidents 24/7." },
      { term: "SIEM", definition: "Security Information and Event Management — a tool that aggregates and analyzes security logs from across an organization to detect threats." },
      { term: "Payload", definition: "The component of an exploit that performs the intended malicious action, such as opening a reverse shell or extracting data." },
    ],
  },
  {
    slug: "awareness-outreach",
    title: "Awareness Outreach",
    icon: Radio,
    color: "text-primary",
    heroDescription:
      "Campus workshops, seminars, and awareness drives to educate students and institutions about cyber threats. Empowering communities with the knowledge to stay safe online.",
    overview: [
      "Most cyberattacks succeed not because of sophisticated technology, but because of human error. Phishing emails, weak passwords, social engineering — these exploit people, not systems. That's why awareness is the first line of defense.",
      "Our outreach programs bring cybersecurity education directly to college campuses, schools, and organizations. We conduct interactive workshops, live demonstrations of common attacks, and Q&A sessions that make security concepts accessible to everyone.",
      "We cover practical, everyday security topics: how to spot phishing emails, create strong passwords, secure your social media accounts, protect your personal data, and respond when something goes wrong.",
      "Our goal is to create a culture of security awareness. When every student and employee understands the basics of cyber hygiene, the entire organization becomes more resilient against attacks.",
    ],
    keyTopics: [
      "Phishing Awareness",
      "Social Engineering",
      "Password Security",
      "Safe Browsing",
      "Data Privacy",
      "Mobile Security",
      "Social Media Safety",
    ],
    whoItsFor:
      "College students, faculty, school teachers, corporate employees, NGOs, and anyone who uses the internet — which is everyone. No technical background required.",
    resources: [
      { name: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework", description: "The US government's comprehensive framework for managing cybersecurity risk." },
      { name: "SANS Security Awareness", url: "https://www.sans.org/security-awareness-training/", description: "Industry-leading security awareness training programs and resources." },
      { name: "StaySafeOnline (NCA)", url: "https://staysafeonline.org", description: "Resources from the National Cyber Security Alliance for everyday online safety." },
      { name: "Have I Been Pwned", url: "https://haveibeenpwned.com", description: "Check if your email or phone has been compromised in a data breach." },
      { name: "Google Safety Center", url: "https://safety.google", description: "Tools and tips from Google to help you stay safe and secure online." },
      { name: "CERT-In", url: "https://www.cert-in.org.in", description: "Indian Computer Emergency Response Team — India's nodal agency for cybersecurity incidents." },
      { name: "Phishing Quiz by Google", url: "https://phishingquiz.withgoogle.com", description: "Interactive quiz to test your ability to identify phishing attempts." },
      { name: "Cyber Surakshit Bharat", url: "https://www.meity.gov.in", description: "Government of India initiative to raise awareness about cybersecurity." },
    ],
    roadmap: [
      { title: "Understand the Threat Landscape", description: "Learn what types of cyberattacks exist (phishing, ransomware, identity theft) and why they succeed. Study real-world case studies of breaches caused by human error." },
      { title: "Master Personal Cyber Hygiene", description: "Implement strong password practices (use a password manager), enable 2FA everywhere, keep software updated, and learn to recognize suspicious emails and links." },
      { title: "Learn to Spot Social Engineering", description: "Understand how attackers manipulate psychology: urgency, authority, and trust. Practice identifying phishing emails, vishing calls, and pretexting scenarios." },
      { title: "Secure Your Digital Footprint", description: "Audit your social media privacy settings, understand what data you're sharing publicly, and learn how attackers use OSINT to target individuals." },
      { title: "Organize Awareness Sessions", description: "Learn to design and deliver cybersecurity workshops. Create engaging presentations, live demos (safe phishing simulations), and interactive quizzes for your campus or organization." },
      { title: "Build a Security Culture", description: "Establish ongoing awareness programs: monthly newsletters, security tip posters, incident reporting channels, and regular training refreshers." },
    ],
    glossary: [
      { term: "Phishing", definition: "A social engineering attack where attackers send fraudulent messages (usually emails) disguised as legitimate ones to trick victims into revealing sensitive information." },
      { term: "Social Engineering", definition: "The psychological manipulation of people into performing actions or divulging confidential information, bypassing technical security measures." },
      { term: "Two-Factor Authentication (2FA)", definition: "A security method requiring two different forms of identification to access an account — typically something you know (password) and something you have (phone code)." },
      { term: "Ransomware", definition: "Malware that encrypts a victim's files and demands payment (ransom) in exchange for the decryption key to restore access." },
      { term: "Data Breach", definition: "An incident where unauthorized individuals gain access to confidential data, often resulting in exposure of personal information." },
      { term: "Vishing", definition: "Voice phishing — a social engineering attack conducted over phone calls where attackers impersonate trusted entities to extract information." },
      { term: "Smishing", definition: "SMS phishing — phishing attacks delivered via text messages, often containing malicious links or requests for personal information." },
      { term: "Password Manager", definition: "A software tool that securely stores and manages complex, unique passwords for all your accounts, requiring you to remember only one master password." },
      { term: "Cyber Hygiene", definition: "The set of routine practices and steps that users take to maintain system health and improve online security, like regular updates and strong passwords." },
      { term: "Spear Phishing", definition: "A targeted phishing attack directed at a specific individual or organization, using personalized information to increase credibility." },
      { term: "Pretexting", definition: "A social engineering technique where the attacker creates a fabricated scenario (pretext) to engage the victim and extract information." },
      { term: "Insider Threat", definition: "A security risk that comes from within the organization — an employee, contractor, or partner who misuses their access, intentionally or accidentally." },
    ],
  },
  {
    slug: "ctf-competitions",
    title: "CTF Competitions",
    icon: Flag,
    color: "text-destructive",
    heroDescription:
      "Participate in Capture the Flag challenges designed to sharpen your offensive and defensive security skills. The most fun way to learn cybersecurity by doing.",
    overview: [
      "Capture the Flag (CTF) competitions are cybersecurity challenges where participants solve security-related puzzles to find hidden 'flags' — secret strings that prove you've completed a challenge. They're the most engaging way to learn security skills.",
      "CTFs come in different formats: Jeopardy-style (individual challenges in categories like web, crypto, reverse engineering, forensics) and Attack-Defense (teams defend their own services while attacking others). Both test real-world skills in a safe, legal environment.",
      "At Cyber Dravida, we organize regular CTF events for beginners and intermediate players. We also prepare teams for national and international CTF competitions, providing training, practice challenges, and mentorship.",
      "Whether you're solving your first basic challenge or competing against teams worldwide, CTFs build practical skills that no textbook can teach: creative thinking, working under pressure, and deep technical understanding of how systems break.",
    ],
    keyTopics: [
      "Web Exploitation",
      "Cryptography",
      "Reverse Engineering",
      "Binary Exploitation (Pwn)",
      "Digital Forensics",
      "Steganography",
      "Miscellaneous Challenges",
      "OSINT Challenges",
    ],
    whoItsFor:
      "Students who enjoy puzzles and problem-solving, aspiring security researchers, anyone who wants to learn hacking legally, and teams preparing for competitive CTF events.",
    resources: [
      { name: "CTFtime", url: "https://ctftime.org", description: "The central hub for CTF competitions worldwide — find upcoming events, team rankings, and write-ups." },
      { name: "PicoCTF", url: "https://picoctf.org", description: "Beginner-friendly CTF by Carnegie Mellon University, perfect for students new to security challenges." },
      { name: "OverTheWire", url: "https://overthewire.org/wargames/", description: "Wargames that teach security concepts through progressive challenges, starting with Bandit for beginners." },
      { name: "CryptoHack", url: "https://cryptohack.org", description: "A fun, free platform for learning modern cryptography through interactive challenges." },
      { name: "pwnable.kr", url: "https://pwnable.kr", description: "Binary exploitation challenges ranging from easy to expert level, great for learning pwn skills." },
      { name: "Root Me", url: "https://www.root-me.org", description: "Hundreds of challenges and virtual environments for practicing hacking techniques." },
      { name: "CTF Field Guide", url: "https://trailofbits.github.io/ctf/", description: "Comprehensive guide by Trail of Bits covering CTF strategies, tools, and techniques." },
      { name: "HackTricks", url: "https://book.hacktricks.xyz", description: "Massive knowledge base of hacking techniques, tricks, and methodologies for CTFs and pentesting." },
    ],
    roadmap: [
      { title: "Start with Wargames", description: "Begin with OverTheWire Bandit to learn Linux basics, then move to Natas for web security. These are gentle introductions that build fundamental skills." },
      { title: "Try Beginner CTFs", description: "Participate in PicoCTF or similar beginner-friendly competitions. Focus on web and forensics categories first — they're the most accessible for newcomers." },
      { title: "Build Your Toolkit", description: "Learn essential tools: Burp Suite (web), Ghidra/IDA (reversing), pwntools (binary exploitation), CyberChef (crypto/encoding), Wireshark (network forensics)." },
      { title: "Specialize in Categories", description: "Pick 2-3 categories to focus on. Deep-dive into web exploitation, cryptography, or reverse engineering. Read write-ups of challenges you couldn't solve." },
      { title: "Join a Team", description: "Form or join a CTF team. Team competitions require different skills — communication, task distribution, and collaboration under time pressure." },
      { title: "Compete Nationally & Internationally", description: "Register on CTFtime, participate in rated competitions (DEF CON CTF Qualifier, Google CTF, Hack.lu). Aim to improve your team's global ranking." },
      { title: "Give Back — Create Challenges", description: "Design and host your own CTF challenges. Teaching through challenge creation deepens your understanding and builds the community." },
    ],
    glossary: [
      { term: "Flag", definition: "A secret string (e.g., flag{th1s_1s_a_flag}) hidden within a challenge that proves you've successfully solved it." },
      { term: "Jeopardy CTF", definition: "A CTF format where challenges are organized in categories (web, crypto, forensics, etc.) with point values based on difficulty." },
      { term: "Attack-Defense CTF", definition: "A CTF format where teams simultaneously defend their own vulnerable services while exploiting the same services on other teams' servers." },
      { term: "Write-up", definition: "A detailed explanation of how a CTF challenge was solved, shared by participants after the competition ends to help others learn." },
      { term: "Reverse Engineering", definition: "The process of analyzing compiled software to understand its functionality, often to find vulnerabilities or extract hidden information." },
      { term: "Binary Exploitation (Pwn)", definition: "Exploiting vulnerabilities in compiled programs (buffer overflows, format strings, use-after-free) to gain control of execution." },
      { term: "Steganography", definition: "The practice of hiding secret data within ordinary files like images, audio, or text so that its existence is not detected." },
      { term: "Buffer Overflow", definition: "A vulnerability where a program writes more data to a buffer than it can hold, potentially overwriting adjacent memory and allowing code execution." },
      { term: "SQL Injection", definition: "A web vulnerability where attacker-supplied input is included in database queries, allowing unauthorized data access or manipulation." },
      { term: "XSS (Cross-Site Scripting)", definition: "A web vulnerability where malicious scripts are injected into trusted websites, executing in visitors' browsers to steal data or session tokens." },
      { term: "Forensics", definition: "In CTF context, challenges involving analysis of files, disk images, memory dumps, network captures, or other artifacts to extract hidden information." },
      { term: "CyberChef", definition: "A free web tool by GCHQ for encoding, decoding, encryption, compression, and data analysis — essential for CTF participants." },
    ],
  },
  {
    slug: "osint-investigation",
    title: "OSINT & Investigation",
    icon: Search,
    color: "text-secondary",
    heroDescription:
      "Learn open-source intelligence gathering and cyber crime investigation techniques used by real analysts. Master the art of finding information that's hiding in plain sight.",
    overview: [
      "Open-Source Intelligence (OSINT) is the collection and analysis of information from publicly available sources. It's used by law enforcement, journalists, security researchers, and intelligence agencies worldwide — and it's one of the most powerful skills you can develop.",
      "OSINT isn't about hacking into systems. It's about knowing where to look, what tools to use, and how to connect dots across publicly available data: social media, websites, public records, satellite imagery, domain registrations, and more.",
      "Our training covers the complete OSINT methodology: planning and requirements gathering, data collection from multiple sources, processing and analysis, and reporting findings. You'll learn to conduct investigations ethically and legally.",
      "From tracking threat actors to investigating fraud, from verifying news to conducting due diligence — OSINT skills are in high demand across industries. Our courses prepare you with the methodology and tools used by professional analysts.",
    ],
    keyTopics: [
      "OSINT Methodology",
      "Social Media Intelligence",
      "Domain & IP Investigation",
      "Geolocation (GEOINT)",
      "People Search Techniques",
      "Dark Web Monitoring",
      "Digital Footprint Analysis",
      "Threat Intelligence",
    ],
    whoItsFor:
      "Aspiring security analysts, journalists, law enforcement trainees, HR professionals conducting background checks, researchers, and anyone curious about digital investigation techniques.",
    resources: [
      { name: "OSINT Framework", url: "https://osintframework.com", description: "A comprehensive collection of OSINT tools organized by category — the go-to starting point for any investigation." },
      { name: "IntelTechniques", url: "https://inteltechniques.com", description: "Michael Bazzell's resources on OSINT techniques, tools, and privacy — widely used by investigators." },
      { name: "Shodan", url: "https://www.shodan.io", description: "Search engine for internet-connected devices. Find exposed servers, webcams, databases, and IoT devices worldwide." },
      { name: "Maltego", url: "https://www.maltego.com", description: "Powerful link analysis and data mining tool for visual investigation of relationships between entities." },
      { name: "Bellingcat", url: "https://www.bellingcat.com", description: "Investigative journalism collective known for groundbreaking OSINT investigations. Excellent case studies and guides." },
      { name: "Google Dorking Guide", url: "https://www.exploit-db.com/google-hacking-database", description: "The Google Hacking Database — advanced search operators to find exposed sensitive information." },
      { name: "Wayback Machine", url: "https://web.archive.org", description: "Internet Archive's tool to view historical snapshots of websites — essential for tracking changes over time." },
      { name: "OSINT Curious", url: "https://osintcurio.us", description: "Community-driven OSINT learning resources, webcasts, and tool reviews by experienced practitioners." },
    ],
    roadmap: [
      { title: "Learn Google Dorking", description: "Master advanced Google search operators (site:, filetype:, inurl:, intitle:). Learn to find exposed documents, login pages, and sensitive files using the Google Hacking Database." },
      { title: "Social Media OSINT", description: "Learn to investigate social media profiles across platforms. Understand metadata in photos, geolocation from posts, and tools like Sherlock for username enumeration." },
      { title: "Domain & Network Intelligence", description: "Use WHOIS, DNS lookups, Shodan, Censys, and BuiltWith to investigate domains, IP addresses, and the technology stack of target organizations." },
      { title: "Geolocation & Imagery", description: "Develop skills in geolocating images using visual clues, Google Earth, SunCalc, and satellite imagery. Practice with GeoGuessr and Bellingcat's verification challenges." },
      { title: "Master OSINT Tools", description: "Learn professional tools: Maltego for link analysis, SpiderFoot for automated reconnaissance, theHarvester for email/domain enumeration, and Recon-ng for modular OSINT." },
      { title: "Investigation Methodology", description: "Develop a structured approach: define objectives, collect data systematically, analyze connections, document findings, and produce professional reports with evidence chains." },
      { title: "Specialize & Contribute", description: "Choose a specialization: threat intelligence, fraud investigation, missing persons, or journalism. Contribute to the OSINT community through write-ups and tool development." },
    ],
    glossary: [
      { term: "OSINT", definition: "Open-Source Intelligence — the collection and analysis of information gathered from publicly available sources for intelligence purposes." },
      { term: "Google Dorking", definition: "Using advanced Google search operators to find specific information that's publicly indexed but not easily discoverable through normal searches." },
      { term: "WHOIS", definition: "A protocol and database system for querying domain name registration information — who registered a domain, when, and contact details." },
      { term: "Metadata", definition: "Data about data — hidden information embedded in files (photos, documents) such as GPS coordinates, creation dates, device info, and author names." },
      { term: "GEOINT", definition: "Geospatial Intelligence — analysis of imagery and geospatial information to describe, assess, and visually depict physical features and activities on Earth." },
      { term: "Sock Puppet", definition: "A fake online identity created for investigation purposes, used to access information without revealing the investigator's real identity." },
      { term: "Digital Footprint", definition: "The trail of data you leave behind when using the internet — social media posts, website visits, online purchases, and other digital activities." },
      { term: "Threat Intelligence", definition: "Information about current and potential attacks that can help organizations understand risks and defend against cyber threats." },
      { term: "Doxing", definition: "Researching and publicly revealing someone's private information online. While the techniques overlap with OSINT, doxing is unethical and often illegal." },
      { term: "Pivoting", definition: "Using one piece of discovered information to find additional related data — e.g., using an email to find associated accounts, usernames, or domains." },
      { term: "Attribution", definition: "The process of identifying who is responsible for a cyberattack or online activity by analyzing technical and non-technical evidence." },
      { term: "Dark Web", definition: "The part of the internet accessible only through special software (like Tor), often associated with anonymous communication and illegal marketplaces." },
      { term: "Enumeration", definition: "The systematic process of extracting usernames, email addresses, hostnames, and other information from a target system or service." },
      { term: "HUMINT", definition: "Human Intelligence — information gathered through interpersonal contact, as opposed to technical or signals intelligence." },
    ],
  },
];
