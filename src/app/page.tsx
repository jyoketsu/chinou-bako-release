import Link from 'next/link'

const installers = [
  {
    title: 'macOS Apple Silicon',
    logo: '/logo/mac.svg',
    invertOnDark: true,
    href: 'https://github.com/jyoketsu/electron-template/releases/download/v0.0.1/electron-template-0.0.1-arm64.dmg',
  },
  {
    title: 'macOS Intel',
    logo: '/logo/mac.svg',
    invertOnDark: true,
    href: 'https://github.com/jyoketsu/electron-template/releases/download/v0.0.1/electron-template-0.0.1-x64.dmg',
  },
  {
    title: 'Linux DEB',
    logo: '/logo/linux.svg',
    invertOnDark: false,
    href: 'https://github.com/jyoketsu/electron-template/releases/download/v0.0.1/electron-template_0.0.1_amd64.deb',
  },
  {
    title: 'Linux AppImage',
    logo: '/logo/linux.svg',
    invertOnDark: false,
    href: 'https://github.com/jyoketsu/electron-template/releases/download/v0.0.1/electron-template-0.0.1.AppImage',
  },
  {
    title: 'Windows',
    logo: '/logo/windows.svg',
    invertOnDark: true,
    href: 'https://github.com/jyoketsu/electron-template/releases/download/v0.0.1/electron-template-0.0.1-setup.exe',
  },
]

export default function Home() {

  return (
    <div className="space-y-4 max-w-2xl mx-auto px-4 pt-[8%]">
      <p className='w-full text-3xl font-bold flex justify-center items-center gap-2'>
        <i className='bg-[url("/logo/icon.png")] size-10 bg-contain bg-center bg-no-repeat' />
        <span>AI百宝箱</span>
      </p>
      <div>
        <h2 className="mb-3 text-lg font-semibold">下载安装包</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {installers.map((installer) => (
            <Link
              key={installer.href}
              className="flex items-center gap-3 rounded-lg border bg-muted/30 p-3 transition-colors hover:bg-muted"
              href={installer.href}
              target="_blank"
              rel="noreferrer"
            >
              <img className={`h-8 w-8 shrink-0 ${installer.invertOnDark ? 'dark:invert' : ''}`} src={installer.logo} alt="" />
              <span className="min-w-0">
                <span className="block font-medium leading-5">{installer.title}</span>
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-900 dark:bg-yellow-950">
          <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-2">macOS 用户注意</p>
          <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-3">安装后，请在终端中执行以下命令：</p>
          <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs font-mono space-y-1 overflow-x-auto">
            <div>xattr -cr /Applications/AI百宝箱.app</div>
            <div>codesign --force --deep --sign - /Applications/AI百宝箱.app</div>
          </div>
        </div>
      </div>
    </div>
  )
}
