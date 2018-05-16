const guestCenterConstants = {
  slotIntervalInMinutes: 15,
  slotsPerByte: 2,
  totalSlots: 96
};

const availabilityStoreConstants = {
  bitmapHeaderOffsetInBytes: 4
};

const cacheServerConstants = {
  csSlotIntervalInMinutes: 15
};

const availDataLength = (guestCenterConstants.totalSlots / guestCenterConstants.slotsPerByte)
  + availabilityStoreConstants.bitmapHeaderOffsetInBytes;

module.exports = function parseAvailabilityByteArray(dateTime, byteString) {
  const minutesSinceMidnight = dateTime.diff(dateTime.clone().startOf('day'), 'minutes');
  const slotIndex = Math.floor(minutesSinceMidnight / cacheServerConstants.csSlotIntervalInMinutes);
  const bufferIndex = availabilityStoreConstants.bitmapHeaderOffsetInBytes + Math.floor(slotIndex / guestCenterConstants.slotsPerByte);
  const buffer = Buffer.from(byteString, 'utf8');
  const dataByte = buffer[bufferIndex];
  const slotByte = slotIndex % 2 == 0 ? dataByte & 0xF0 : dataByte & 0x0F;
  return [{ isAvailable: slotByte !== 0 }];
}
