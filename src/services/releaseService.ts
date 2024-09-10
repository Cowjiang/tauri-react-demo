import { httpRequest } from '../utils/helpers/tauriHelpers.ts'

const makeGithubRequest = <T>(url: string) =>
  httpRequest<T>({
    url: 'https://api.github.com/repos/Cowjiang/vite-plugin-conditional-compiler' + url,
    method: 'GET',
    headers: {
      'User-Agent': 'request',
    },
  })

const getLatestRelease = async () => makeGithubRequest<any>('/releases/latest')

export { getLatestRelease }
