import { fairyDustCursor } from 'cursor-effects'
import { Provider } from '@locales'
import Image from '@components/primitive/image'
import minou from '@assets/minou.jpg'

const tags = [
  'functionnal',
  'lambda',
  'devops',
  'lean',
  'agile',
  'safe',
  'ssr',
  'sass',
  'tdd',
]

const links = [
  { href: 'https://medium.com/@oliviergamache', alt: 'medium' },
  { href: 'https://github.com/olgam4', alt: 'github' },
  { href: 'https://astrorush.glo.quebec', alt: 'astrorush' },
  { href: 'https://palooza.glo.quebec', alt: 'palooza' },
  { href: 'https://bat.glo.quebec', alt: 'bat' },
  { href: 'https://ko-fi.com/oliviergamache', alt: 'help me with my ui/ux courses' }
]

export default function() {
  createEffect(() => {
    new fairyDustCursor()
  })
  return (
    <Provider>
      <Title>olivier</Title>
      <div class="rainbow full p-10">
        <h1 class="wordart radial"><span class="text">Olivier Gamache</span></h1>
        <div class="p-10 flex space-x-10 sm:space-x-[30%]">
          <ul>
            <For each={links} children={({ href, alt }) => (
              <li class="mb-4"><a class="border-b-blue-500 border-dashed border-b text-blue-500 text-lg hover:border-b-blue-200 hover:text-blue-200 transition-colors"  target="_blank" rel="noreferrer" href={href}>{alt}</a></li>
            )} />
            <p class="neue mt-10 text-white text-3xl -rotate-[10deg]">Graphic design is my passion</p>
          </ul>
          <Image image={minou} size={3} />
        </div>
        <For each={tags} children={(tag) => (
          <p class="wordart blues" style={{
            left: Math.floor(Math.random() * 50) + '%',
            top: Math.floor(Math.random() * 30) + '%'
          }}><span class="text">#{tag}</span></p>
        )} />
      </div>
    </Provider>
  )
}
