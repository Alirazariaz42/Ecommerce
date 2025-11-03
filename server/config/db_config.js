import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://aliraza:AliRaza42@devcluster.o34lycg.mongodb.net/myDatabase?retryWrites=true&w=majority",
      {
        family: 4, // 👈 Forces IPv4 and skips IPv6 issues
      }
    );
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ Connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
