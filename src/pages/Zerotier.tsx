import { Button, Listbox, ListboxItem, ListboxItemProps, ListboxSection, ListboxSectionProps } from '@nextui-org/react'
import { ReactElement, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { NetworkIcon, ServiceIcon, SettingIcon, StatusIcon } from '../components/base/Icon.tsx'
import ZerotierNetworks from '../components/zerotier/network/ZerotierNetworks.tsx'
import ZerotierService from '../components/zerotier/service/ZerotierService.tsx'
import ZerotierStatus from '../components/zerotier/status/ZerotierStatus.tsx'

type TabId = 'Networks' | 'Status' | 'Service'

type ListItem = {
  title: string
  description?: string
  panel?: ReactElement
} & Pick<ListboxItemProps, 'children' | 'startContent'>

type ListSection = {
  items: ListItem[]
} & Partial<ListboxSectionProps<ListItem>>

const iconProps = { width: 16 }

const settingList: ListSection[] = [
  {
    key: 'Basic',
    title: 'Basic',
    items: [
      {
        title: 'Networks',
        description: 'Manage ZeroTier Networks',
        startContent: <NetworkIcon {...iconProps} />,
        panel: <ZerotierNetworks />,
      },
      {
        title: 'Status',
        startContent: <StatusIcon {...iconProps} />,
        description: 'My status of ZeroTier',
        panel: <ZerotierStatus />,
      },
    ],
  },
  {
    key: 'Advance',
    title: 'Advance',
    items: [
      {
        title: 'Service',
        startContent: <ServiceIcon {...iconProps} />,
        description: 'Manage ZeroTier Service',
        panel: <ZerotierService />,
      },
    ],
  },
]

function Zerotier({ tab }: { tab?: TabId }) {
  const navigate = useNavigate()

  const [selectedKeys, setSelectedKeys] = useState<Set<TabId>>()
  const currentListItem = useMemo(
    () =>
      settingList.flatMap(({ items }) => items).find((item) => item?.title === selectedKeys?.values().next().value) ??
      ({} as ListItem),
    [selectedKeys],
  )

  const handleSelectedKeysChange = (keys: Set<string | number> | 'all') => {
    if (keys !== 'all') {
      setSelectedKeys(keys as Set<TabId>)
      navigate(`/${keys.values().next().value.toLowerCase()}`)
    }
  }

  useEffect(() => {
    setSelectedKeys(new Set([tab ?? 'Networks']))
  }, [tab])

  return (
    <div className="w-full h-full flex overflow-y-hidden">
      <div className="w-[220px] p-4 flex flex-col flex-shrink-0">
        <Listbox
          aria-label="Settings"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          hideSelectedIcon
          shouldHighlightOnFocus={false}
          onSelectionChange={handleSelectedKeysChange}
          items={settingList}
          itemClasses={{
            base: 'data-[selected=true]:bg-default data-[hover=true]:bg-default/60 text-default-800',
          }}
        >
          {(section) => (
            <ListboxSection key={section.key} aria-label={section.title} {...section}>
              {(section.items as ListItem[]).map((item) => (
                <ListboxItem key={item.title} aria-label={item.title} {...item} description="">
                  {item.title || item.children}
                </ListboxItem>
              ))}
            </ListboxSection>
          )}
        </Listbox>
      </div>
      <div className="w-full h-screen flex flex-col px-6 py-4 mr-6 overflow-hidden">
        <div className="w-full mt-1 mb-6 flex items-center">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">{selectedKeys}</h1>
            <p className="mt-1 text-sm text-default-600">{currentListItem.description}</p>
          </div>
          <Button
            aria-label="Settings"
            className="ml-auto"
            variant="flat"
            isIconOnly
            radius="lg"
            onPress={() => navigate('/setting')}
          >
            <SettingIcon width={22} height={22} />
          </Button>
        </div>
        <div className="w-full h-full flex flex-col overflow-y-hidden">{currentListItem.panel}</div>
      </div>
    </div>
  )
}

export default Zerotier
