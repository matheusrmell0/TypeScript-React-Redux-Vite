export default function checkInterface<Interface>(
  obj: unknown,
  ...keys: Array<keyof Interface>
): obj is Interface {
  if (
    obj &&
    typeof obj === 'object' &&
    keys.filter((key) => key in obj).length === keys.length
  ) {
    return true;
  } else {
    return false;
  }
}
