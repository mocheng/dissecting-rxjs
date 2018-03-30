function publish(selector) {
  if (selector) {
    return this.multicast(() => new Subject(), selector);
  } else {
    return this.multicast(new Subject());
  }
}

