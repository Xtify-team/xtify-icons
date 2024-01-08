type Awaitable<T> = T | PromiseLike<T>;
import type {ResolvedOptions} from '../../types';

export type Compiler = (
  svg: string,
  componentName: string,
  options: ResolvedOptions
) => string | Promise<string>

export interface CustomCompiler {
  compiler: Awaitable<Compiler>;
  extension?: string;
}
