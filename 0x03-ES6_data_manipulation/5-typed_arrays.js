export default function createInt8TypedArray(length, position, value) {
  if (position > length) {
    throw Error('Position outside range');
  }
  const newbuffer = new ArrayBuffer(length);
  const int8View = new Int8Array(newbuffer);
  int8View[position] = value;
  return new DataView(newbuffer, 0);
}
