import { Button } from '@nextui-org/react'
import { Response } from '@tauri-apps/api/http'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import i18n from '../i18n/index.ts'
import { getNetworks } from '../services/zerotierService.ts'
import { useAppStore } from '../store/app.ts'
import { InvokeEvent } from '../typings/enum.ts'
import { invokeCommand, readTextFile, writeTextFile } from '../utils/helpers/tauriHelpers.ts'

function Dev() {
  const { restartAsAdmin } = useAppStore()
  const { theme, setTheme } = useTheme()
  const navigate = useNavigate()
  const [assList, setAssList] = useState<JSX.Element[]>([])

  async function readConfiguration() {
    return await readTextFile()
  }

  async function writeConfiguration(content: string) {
    await writeTextFile(content)
  }

  const invokeCommandButton = (command: string) => ({
    text: `[Invoke] ${command}`,
    onClick: () => {
      invokeCommand(command)
        .then((res) => console.log(res))
        .catch((err) => console.error(err))
    },
  })

  const apiButton = (func: () => Promise<Response<any>>) => ({
    text: `[Api] ${func.name}`,
    onClick: async () => console.log(await func()),
  })

  const btnList = [
    invokeCommandButton(InvokeEvent.GET_CONFIG),
    invokeCommandButton(InvokeEvent.GET_ZEROTIER_SERVER_INFO),
    invokeCommandButton(InvokeEvent.HIDE_MAIN_WINDOW),
    apiButton(getNetworks),
    {
      text: '[i18n]: translation',
      onClick: () => console.log(`hello => ${i18n.t('hello')}`),
    },
    {
      text: 'Restart As Admin',
      onClick: restartAsAdmin,
    },
    {
      text: 'Theme Switcher',
      onClick: () => setTheme(theme === 'light' ? 'dark' : 'light'),
    },
    {
      text: '[fs] read configuration file',
      onClick: async () => {
        console.log(await readConfiguration())
      },
    },
    {
      text: '[fs] write configuration file',
      onClick: async () => {
        const configuration = await readConfiguration()
        console.log('read', configuration)
        const testWriteContent = 'hello'
        console.log('write', testWriteContent)
        await writeConfiguration(testWriteContent)
        const afterWriteContent = await readConfiguration()
        console.log('read', afterWriteContent)
        console.log('write', configuration)
        await writeConfiguration(configuration)
        const recoverContent = await readConfiguration()
        console.log('read', recoverContent)
      },
    },
    {
      text: 'Setting Page',
      onClick: () => navigate('/setting'),
    },
  ]

  function ass(): JSX.Element {
    return (
      <motion.div
        className={'absolute top-0 font-bold'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1.2, y: -10 }}
        exit={{ opacity: 0 }}
      >
        kiss my ass!
      </motion.div>
    )
  }

  const kissMyAssBtn = (
    <div className={'relative'}>
      <Button
        onClick={() => {
          const newAssList = [...assList]
          newAssList.push(ass())
          setAssList(newAssList)
          setTimeout(() => {
            const newAssList = [...assList]
            newAssList.shift()
            setAssList(newAssList)
          }, 1000)
        }}
        size="lg"
        className="flowing-gradient bg-gradient-to-r from-[#f02fc2] to-[#6094ea]  font-bold py-2 px-4 m-1 relative"
      >
        🤩
      </Button>
      {assList.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  )

  return (
    <div className="w-full min-h-[100vh] p-3">
      <div className="flex flex-row justify-center">
        <img src="/lab.png" className="w-40" />
      </div>
      <div className="w-full mt-5 flex flex-wrap ">
        {btnList.map(({ text, onClick }) => (
          <Button size="lg" className="font-bold mt-2 ml-2 flex-grow" color="primary" onClick={onClick} key={text}>
            {text}
          </Button>
        ))}
        {kissMyAssBtn}
      </div>
    </div>
  )
}

export default Dev
