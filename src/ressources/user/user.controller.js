import User from './user.model'

export const getUser = async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id).select("-password");
      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({
        success: false,
        responseCode: ResponseCodes.server_error,
      });
    }
  };
  