import { Avatar, Divider, Image, Link, Listbox, ListboxItem, ListboxItemProps, ListboxSection } from '@nextui-org/react'
import { useEffect, useState } from 'react'

import { BugIcon, GithubIcon, TagsIcon } from '../components/base/Icon.tsx'
import { getLatestRelease } from '../services/releaseService.ts'
import { getAppVersion, openInSystem } from '../utils/helpers/tauriHelpers.ts'

const developers = [
  {
    name: 'Cowjiang',
    userId: 'Cowjiang',
    email: 'cowjiang@163.com',
    link: 'https://github.com/Cowjiang',
  },
  {
    name: 'Agitator',
    userId: 'Code-Agitator',
    email: '1482084534@qq.com',
    link: 'https://github.com/Code-Agitator',
  },
]

const poweredBy = [
  {
    title: 'Tauri',
    link: 'https://tauri.app/',
  },
  {
    title: 'NextUI',
    link: 'https://nextui.org/',
  },
  {
    title: 'Flaticon',
    link: 'https://www.flaticon.com/',
  },
]

function About() {
  const [appVersion, setAppVersion] = useState('0.0.0')
  const [latestVersion, setLatestVersion] = useState('1.0.0')

  const isNewVersionAvailable = latestVersion > appVersion

  const getLatestVersion = async () => {
    const { data } = await getLatestRelease()
    console.log(data)
    setLatestVersion(data?.['tag_name'] ?? '1.0.0')
  }

  const init = async () => {
    const version = await getAppVersion()
    version && setAppVersion(version)
    await getLatestVersion()
    console.log(isNewVersionAvailable)
  }
  useEffect(() => {
    init().catch((_) => {})
  }, [])

  const githubLinks: Omit<ListboxItemProps, 'key'>[] = [
    {
      title: isNewVersionAvailable ? 'Update Available' : 'Check For Updates',
      description: isNewVersionAvailable ? `New version ${latestVersion} is available` : 'Latest releases',
      startContent: <TagsIcon width={18} />,
      href: 'https://github.com/Cowjiang/tauri-react-zerotier-toolkit/releases',
      color: 'success',
      classNames: isNewVersionAvailable ? { base: 'text-success', description: 'text-success' } : undefined,
    },
    {
      title: 'Github Repository',
      description: 'Source code',
      startContent: <GithubIcon width={18} />,
      href: 'https://github.com/Cowjiang/tauri-react-zerotier-toolkit',
    },
    {
      title: 'Report Issues',
      description: 'Report issues',
      startContent: <BugIcon width={18} />,
      href: 'https://github.com/Cowjiang/tauri-react-zerotier-toolkit/issues',
    },
  ]

  return (
    <div className="flex flex-col">
      <div className="flex gap-6 items-center">
        <div className="h-[80px]">
          <Image width={80} alt="Logo" src="/zerotier_orange.svg" />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="mb-1 text-2xl font-bold text-primary">ZeroTier Toolkit</h1>
          <p className="text-sm text-primary">Version: {appVersion}</p>
        </div>
      </div>
      <Divider className="mt-8 mb-4" />
      <div className="flex gap-6">
        <Listbox variant="flat" aria-label="Github links">
          <ListboxSection title="Github">
            {githubLinks.map((link, index) => (
              <ListboxItem
                key={index}
                aria-label={link.title as string}
                description={link.description}
                startContent={link.startContent}
                color={link.color}
                classNames={link.classNames}
                onClick={() => link?.href && openInSystem(link.href)}
              >
                {link.title}
              </ListboxItem>
            ))}
          </ListboxSection>
        </Listbox>
        <Listbox variant="flat" aria-label="Developers">
          <ListboxSection title="Developers">
            {developers.map((user) => (
              <ListboxItem key={user.userId} aria-label={user.name} onClick={() => openInSystem(user.link)}>
                <div className="flex gap-2 items-center">
                  <Avatar
                    className="flex-shrink-0"
                    alt={user.name}
                    name={user.name.charAt(0)}
                    src={`https://github.com/${user.userId}.png`}
                    size="sm"
                    showFallback
                  />
                  <div className="flex flex-col">
                    <span className="text-small">{user.name}</span>
                    <span className="text-tiny text-default-400">{user.email}</span>
                  </div>
                </div>
              </ListboxItem>
            ))}
          </ListboxSection>
        </Listbox>
      </div>
      <div className="mt-4 px-2 flex flex-col justify-center">
        <p className="text-sm text-foreground-400">
          <span>Powered by </span>
          <span>
            {poweredBy.map((item, index) => (
              <span key={index}>
                <Link size="sm" showAnchorIcon className="cursor-pointer" onClick={() => openInSystem(item.link)}>
                  {item.title}
                </Link>
                {index < poweredBy.length - 1 && ' / '}
              </span>
            ))}
          </span>
          <span>, following MIT License</span>
        </p>
      </div>
    </div>
  )
}

export default About
