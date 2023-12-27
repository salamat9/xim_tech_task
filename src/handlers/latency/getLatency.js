const getLatency = async (req, res) => {
  try {          
    const start = Date.now();

    setTimeout(() => {
      const latency = Date.now() - start;
      res.status(200).json({ latency });
    }, 3000);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

export default getLatency;
