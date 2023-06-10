import { Node } from '@babel/types'
import { isCallOf } from './utils'
import { ScriptCompileContext } from './context'

export const DEFINE_EXPOSE = 'defineExpose'

export function processDefineExpose(
  ctx: ScriptCompileContext,
  node: Node
): boolean {
  if (!isCallOf(node, ctx.macrosAliases[DEFINE_EXPOSE])) {
    return false
  }
  if (ctx.hasDefineExposeCall) {
    ctx.error(`duplicate ${DEFINE_EXPOSE}() call`, node)
  }
  ctx.hasDefineExposeCall = true
  return true
}
