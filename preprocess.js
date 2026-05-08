import { build } from 'vite'
import path from 'path'

export async function preprocess(file) {
  const { filePath, outputPath } = file

  await build({
    configFile: false,
    resolve: {
      alias: {
        "@": path.resolve("./src")
      }
    },
    build: {
      outDir: path.dirname(outputPath),
      lib: {
        entry: filePath,
        formats: ['es'],
        fileName: () => path.basename(outputPath),
      },
      minify: false,
      reportCompressedSize: false,
    }
  })

  return outputPath
}
