// import { NextFunction, Request, Response } from "express";
// import { UserServices } from "./user.service";
// import httpStatus from "http-status";
// import catchAsync from "../../app/utils/catchAsync";
// import sendResponse from "../../app/utils/sendResponse";

// const createUser = catchAsync(
//   async (req: Request, res: Response, next: NextFunction) => {
//     const userData = req.body;

//     const result = await UserServices.createUserIntoDb(userData);
//     const responseData = {
//       _id: result?.email,
//       name: result?.name,
//       email: result?.email,
//     };
//     sendResponse(res, {
//       statusCode: httpStatus.CREATED,
//       success: true,
//       message: "User registered successfully",
//       data: responseData,
//     });
//   }
// );

// // Change Password
// const changePassword = catchAsync(async (req: Request, res: Response) => {
//     const { oldPassword, newPassword } = req.body;
//     const email = req?.user?.email;

   
// });

// export const UserController = {
//   createUser,
//   changePassword,
// };
//!.............
import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import httpStatus from "http-status";
import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const userData = req.body;

    const result = await UserServices.createUserIntoDb(userData);
    const responseData = {
      _id: result?.email,
      name: result?.name,
      email: result?.email,
    };
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "User registered successfully",
      data: responseData,
    });
  }
);

const changePassword = catchAsync(async (req: Request, res: Response) => {
  const { oldPassword, newPassword, confirmPassword } = req.body;
  const email = req?.user?.email;
  console.log(confirmPassword,'confirm pass from controller')

  if (!email) {
    return sendResponse(res, {
      statusCode: httpStatus.UNAUTHORIZED,
      success: false,
      message: "Unauthorized request. Email missing!",
    });
  }

  const result = await UserServices.changeUserPasswordIntoDb(
    email,
    oldPassword,
    newPassword,
    confirmPassword
  );

  if (!result.success) {
    return sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: result.message,
    });
  }

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: result.message,
  });
});

export const UserController = {
  changePassword,
  createUser
};
