import React from 'react';
import './DashLanding.scss';
import {
  FaTachometerAlt,
  FaHome,
  FaUserCircle,
  FaEnvelope,
  FaHistory,
  FaUsers,
  FaCog,
  FaQuestionCircle,
  FaLock,
  FaSearch,
  FaBell,
  FaPlus,
  FaCloudUploadAlt,
  FaShareAlt,
  FaEye,
  FaStar,
  FaTasks,
  FaCheckCircle,
  FaCodeBranch,
  FaServer,
} from 'react-icons/fa';

type MenuItem = {
  icon: React.ReactNode;
  label: string;
};

type Project = {
  title: string;
  description: string;
  status: string;
  href: string;
};

type Metric = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

const githubProfileUrl = 'https://github.com/itkrivoshei';
const repositoryUrl = 'https://github.com/itkrivoshei/react-typescript-web-apps';

const navigationItems: MenuItem[] = [
  { icon: <FaHome />, label: 'Overview' },
  { icon: <FaUserCircle />, label: 'Profile' },
  { icon: <FaEnvelope />, label: 'Messages' },
  { icon: <FaHistory />, label: 'Activity' },
  { icon: <FaTasks />, label: 'Tasks' },
  { icon: <FaUsers />, label: 'Team' },
];

const settingsItems: MenuItem[] = [
  { icon: <FaCog />, label: 'Settings' },
  { icon: <FaQuestionCircle />, label: 'Support' },
  { icon: <FaLock />, label: 'Privacy' },
];

const projects: Project[] = [
  {
    title: 'Infrastructure cleanup',
    description:
      'Review config files, remove unused assets, and keep scripts predictable.',
    status: 'In review',
    href: `${repositoryUrl}/actions`,
  },
  {
    title: 'Release checklist',
    description:
      'Validate build, formatting, linting, tests, and deployment readiness.',
    status: 'Active',
    href: repositoryUrl,
  },
  {
    title: 'Metrics panel',
    description:
      'Summarize useful project signals in a compact dashboard surface.',
    status: 'Queued',
    href: githubProfileUrl,
  },
];

const metrics: Metric[] = [
  { label: 'Checks', value: '4', icon: <FaCheckCircle /> },
  { label: 'Branches', value: '2', icon: <FaCodeBranch /> },
  { label: 'Services', value: '3', icon: <FaServer /> },
];

const DashLanding = () => {
  return (
    <div className='dash-landing-container'>
      <Sidebar />
      <MainContent />
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <Logo />
      <Navigation />
      <Settings />
    </aside>
  );
};

const Logo = () => {
  return (
    <a className='logo' href={repositoryUrl} target='_blank' rel='noreferrer'>
      <FaTachometerAlt />
      <div>
        <h2>Control</h2>
        <span>Dashboard UI</span>
      </div>
    </a>
  );
};

const Navigation = () => {
  return (
    <nav className='nav' aria-label='Dashboard navigation'>
      <ul>
        {navigationItems.map((item) => (
          <SidebarItem key={item.label} item={item} />
        ))}
      </ul>
    </nav>
  );
};

type SidebarItemProps = {
  item: MenuItem;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
  return (
    <li>
      <button type='button' aria-label={`${item.label} demo section`}>
        {item.icon}
        <span>{item.label}</span>
      </button>
    </li>
  );
};

const Settings = () => {
  return (
    <div className='settings'>
      <ul>
        {settingsItems.map((item) => (
          <SidebarItem key={item.label} item={item} />
        ))}
      </ul>
    </div>
  );
};

const MainContent = () => {
  return (
    <main className='main'>
      <Header />
      <Content />
    </main>
  );
};

const Header = () => {
  return (
    <header className='header'>
      <TopBar />
      <LowerBar />
    </header>
  );
};

const TopBar = () => {
  return (
    <div className='top-bar'>
      <div className='search-bar'>
        <input
          id='search-input'
          type='text'
          aria-label='Search dashboard'
          placeholder='Search tasks, checks, or services'
        />
        <FaSearch />
      </div>
      <a
        className='icon-button'
        href={`${repositoryUrl}/actions`}
        target='_blank'
        rel='noreferrer'
        aria-label='Open repository actions'
      >
        <FaBell />
      </a>
      <a
        className='user-info'
        href={githubProfileUrl}
        target='_blank'
        rel='noreferrer'
      >
        <img
          src='https://api.dicebear.com/6.x/notionists-neutral/svg?seed=Salem'
          alt='User avatar'
          className='avatar-small'
        />
        <span className='nickname'>Operator</span>
      </a>
    </div>
  );
};

const LowerBar = () => {
  return (
    <div className='lower-bar'>
      <div className='user'>
        <img
          src='https://api.dicebear.com/6.x/notionists-neutral/svg?seed=Salem'
          alt='User avatar'
          className='avatar-large'
        />
        <div className='greeting'>
          <p>Project workspace</p>
          <h1>Operations dashboard</h1>
        </div>
      </div>
      <div className='actions' aria-label='Dashboard actions'>
        <a href={`${repositoryUrl}/issues`} target='_blank' rel='noreferrer'>
          <FaPlus /> Issues
        </a>
        <a href={`${repositoryUrl}/actions`} target='_blank' rel='noreferrer'>
          <FaCloudUploadAlt /> Actions
        </a>
        <a href={repositoryUrl} target='_blank' rel='noreferrer'>
          <FaShareAlt /> Repo
        </a>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <section className='content'>
      <MainContentSection />
      <RightSidebar />
    </section>
  );
};

const MainContentSection = () => {
  return (
    <div className='main-content'>
      <section className='metrics-grid' aria-label='Dashboard metrics'>
        {metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </section>

      <section className='project-section'>
        <div className='section-title'>
          <p>Workspace</p>
          <h2>Active cards</h2>
        </div>
        <div className='my-projects'>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

type MetricCardProps = {
  metric: Metric;
};

const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  return (
    <article className='metric-card'>
      <span>{metric.icon}</span>
      <div>
        <p>{metric.label}</p>
        <strong>{metric.value}</strong>
      </div>
    </article>
  );
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className='card'>
      <div className='card-header'>
        <span>{project.status}</span>
        <FaStar />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className='card-actions'>
        <a
          href={project.href}
          target='_blank'
          rel='noreferrer'
          aria-label={`Open ${project.title}`}
        >
          <FaEye />
        </a>
      </div>
    </article>
  );
};

const RightSidebar = () => {
  return (
    <aside className='right-sidebar'>
      <Announcements />
      <Statistics />
    </aside>
  );
};

const Announcements = () => {
  return (
    <section className='announcements'>
      <p className='side-label'>Updates</p>
      <h3>Announcements</h3>
      <ul>
        <li>
          Verification runs cover typecheck, lint, format, test, and build.
        </li>
        <li>Deployment should stay tied to a successful main branch check.</li>
      </ul>
    </section>
  );
};

const Statistics = () => {
  return (
    <section className='statistics'>
      <p className='side-label'>Summary</p>
      <h3>Statistics</h3>
      <div className='stat-row'>
        <span>Active cards</span>
        <strong>3</strong>
      </div>
      <div className='stat-row'>
        <span>Pending reviews</span>
        <strong>2</strong>
      </div>
      <div className='stat-row'>
        <span>Open notes</span>
        <strong>5</strong>
      </div>
    </section>
  );
};

export default DashLanding;
