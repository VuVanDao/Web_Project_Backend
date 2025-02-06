import db from "../models/index";
import axios from "axios";
import bcrypt from "bcryptjs";
import { name, raw } from "body-parser";
import { where } from "sequelize";
require("dotenv").config();
const MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE;
let saltRounds = 10;
let salt = bcrypt.genSaltSync(saltRounds);
import _ from "lodash";
let handleUserLogin = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let UserData = {};
      let EmailIsExits = await checkUserEmail(email);
      let PasswordIsExits = await checkUserPassword(email, password);
      if (EmailIsExits && PasswordIsExits) {
        UserData.errCode = 0;
        UserData.errMessage = "Ok";
        UserData.user = EmailIsExits;
        resolve(UserData);
      } else {
        UserData.errCode = 1;
        UserData.errMessage = "Email or password not correct !!!!!";
        UserData.user = {};
        resolve(UserData);
      }
    } catch (error) {
      reject(error);
    }
  });
};
let checkUserEmail = async (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: email },
        raw: true,
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
      });
      if (user) {
        resolve(user);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};
let checkUserPassword = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: email },
        raw: true,
      });
      if (user) {
        let check = bcrypt.compareSync(password, user.password);
        if (check) {
          resolve(user);
        } else {
          resolve(false);
        }
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};
let handleGetAllUser = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = "";
      if (userId === "ALL" || userId === "all") {
        let data = await db.User.findAll({
          raw: true,
          attributes: {
            exclude: ["password"],
          },
        });
        if (data && data.length > 0) {
          users = data;
          resolve({
            errCode: 0,
            errMessage: "Found all user",
            users,
          });
        } else {
          resolve({
            errCode: 1,
            errMessage: "Not found any user",
            users,
          });
        }
      } else {
        let data = await db.User.findAll({
          raw: true,
          where: {
            id: userId,
          },
          attributes: {
            exclude: ["password"],
          },
        });
        if (data && data.length > 0) {
          users = data;
          resolve({
            errCode: 0,
            errMessage: "Found user with id " + userId,
            users,
          });
        } else {
          resolve({
            errCode: 1,
            errMessage: "Not found any user",
            users,
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hash = await bcrypt.hashSync(password, salt);
      resolve(hash);
    } catch (error) {
      reject(error);
    }
  });
};
let handleCreateNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data) {
        resolve({
          errCode: 2,
          errMessage: "Server need data to create user",
        });
      }
      let hashPassword = await hashUserPassword(data.password);
      let checkUserEmailIsExist = await checkUserEmail(data.email);
      if (!checkUserEmailIsExist) {
        let user = await db.User.create({
          email: data.email,
          password: hashPassword,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          phoneNumber: data.phoneNumber,
          gender: data.gender,
          roleId: data.roleId,
          positionId: data.positionId,
          image: data.image,
        });
        if (!user) {
          resolve({
            errCode: 1,
            errMessage: "Cannot create user, something happened",
          });
        } else {
          resolve({
            errCode: 0,
            errMessage: "User created",
          });
        }
      } else {
        resolve({
          errCode: 3,
          errMessage: "Email is exist",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
let handleUpdateAUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 1,
          errMessage: "Missing id",
        });
      }
      let user = await db.User.findOne({
        where: { id: data.id },
      });
      if (!user) {
        resolve({
          errCode: 2,
          errMessage: "Not found user with id:" + data.id,
        });
      } else {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;
        user.phoneNumber = data.phoneNumber;
        user.gender = data.gender;
        user.positionId = data.positionId;
        user.roleId = data.roleId;
        if (data.image) {
          user.image = data.image;
        }
        await user.save();
        resolve({
          errCode: 0,
          errMessage: "Update user complete",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
let handleDeleteAUser = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!userId) {
        resolve({ errCode: 1, errMessage: "Missing userId" });
      }
      let user = await db.User.findOne({
        where: { id: userId },
      });
      if (!user) {
        resolve({ errCode: 1, errMessage: "Not found user with id:" + userId });
      } else {
        await user.destroy();
        resolve({
          errCode: 0,
          errMessage: "Delete user complete",
        });
      }
      // let listUser = await db.User.findAll({
      //   raw: true,
      // });
      // resolve(listUser);
    } catch (error) {
      reject(error);
    }
  });
};
let getAllCodeService = async (type) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!type) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter",
        });
      } else {
        let data = {};
        let result = await db.AllCode.findAll({
          raw: true,
          where: { type: type },
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        });
        // console.log("result", result);
        if (result) {
          data.errCode = 0;
          data.errMessage = "Get all code success";
          data.data = result;
        } else {
          data.errCode = 1;
          data.errMessage = "Get all code failed";
        }
        resolve(data);
      }
    } catch (error) {
      reject(error);
    }
  });
};
let getDoctor = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = {};
      let data = await db.User.findAll({
        where: {
          roleId: "R2",
        },
        limit: 10,
        raw: true,
        nest: true,
        attributes: {
          exclude: ["password"],
        },
        order: [["createdAt", "ASC"]],
        include: [
          {
            model: db.AllCode,
            as: "positionData",
            attributes: ["valueEn", "valueVi"],
          },
          {
            model: db.AllCode,
            as: "genderData",
            attributes: ["valueEn", "valueVi"],
          },
        ],
      });

      if (data && data.length > 0) {
        result.errCode = 0;
        result.errMessage = "Ok";
        result.listDoctor = data;
      }
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
let getAllDoctor = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = {};
      let data = await db.User.findAll({
        where: {
          roleId: "R2",
        },
        raw: true,
        nest: true,
        attributes: {
          exclude: ["password", "image", "createdAt", "updatedAt"],
        },
        order: [["id", "ASC"]],
        include: [
          {
            model: db.AllCode,
            as: "positionData",
            attributes: ["valueEn", "valueVi"],
          },
          {
            model: db.AllCode,
            as: "genderData",
            attributes: ["valueEn", "valueVi"],
          },
        ],
      });

      if (data && data.length > 0) {
        result.errCode = 0;
        result.errMessage = "Ok";
        result.listDoctor = data;
      }
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
let saveInfoDoctor = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 1,
          errMessage: "Missing id",
        });
      } else {
        let result = await db.Markdown.findOne({
          where: {
            doctorId: data.id.value,
          },
        });
        let dataDoctorInfo = await db.Doctor_info.findOne({
          where: {
            doctorId: data.id.value,
          },
        });
        let checkMarkdown = true;
        let checkDoctorInfo = true;
        if (!result) {
          let markdown = await db.Markdown.create({
            doctorId: data.id.value,
            contentHTML: data.htmlMarkdown,
            contentMarkdown: data.textMarkdown,
            description: data.introduce,
          });
          if (markdown) {
            checkMarkdown = true;
          } else {
            checkMarkdown = false;
          }
        } else {
          result.doctorId = data.id.value;
          result.contentHTML = data.htmlMarkdown;
          result.contentMarkdown = data.textMarkdown;
          result.description = data.introduce;
          await result.save();
        }

        if (!dataDoctorInfo) {
          let doctorInfo = await db.Doctor_info.create({
            doctorId: data.id.value,
            priceId: data.priceId.value,
            paymentId: data.paymentId.value,
            provinceId: data.provinceId.value,
            specialtyId: data.specialtyId.value,
            clinicId: data.clinicId.value,
            addressClinic: data.addressClinic,
            nameClinic: data.nameClinic,
            note: data.note,
            count: 0,
          });
          if (doctorInfo) {
            checkDoctorInfo = true;
          } else {
            checkDoctorInfo = false;
          }
        } else {
          dataDoctorInfo.doctorId = data.id.value;
          dataDoctorInfo.priceId = data.priceId.value;
          dataDoctorInfo.paymentId = data.paymentId.value;
          dataDoctorInfo.provinceId = data.provinceId.value;
          dataDoctorInfo.specialtyId = data.specialtyId.value;
          dataDoctorInfo.clinicId = data.clinicId.value;
          dataDoctorInfo.addressClinic = data.addressClinic;
          dataDoctorInfo.nameClinic = data.nameClinic;
          dataDoctorInfo.note = data.note;
          await dataDoctorInfo.save();
        }
        if (checkMarkdown && checkDoctorInfo) {
          resolve({
            errCode: 0,
            errMessage: "Done!!!!!!!!!!!!!",
          });
        } else {
          resolve({
            errCode: -1,
            errMessage: "Something wrong",
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
let getDetailDoctor = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 1,
          errMessage: "Missing id",
        });
      } else {
        let data = await db.User.findOne({
          where: {
            id: id,
          },
          raw: true,
          nest: true,
          attributes: {
            exclude: ["password", "createdAt", "updatedAt"],
          },
          include: [
            {
              model: db.Markdown,
              attributes: ["contentHTML", "contentMarkdown", "description"],
            },
            {
              model: db.AllCode,
              as: "positionData",
              attributes: ["valueVi", "valueEn"],
            },
            {
              model: db.Doctor_info,
              attributes: [
                "priceId",
                "paymentId",
                "provinceId",
                "addressClinic",
                "specialtyId",
                "clinicId",
                "nameClinic",
                "note",
              ],
            },
          ],
        });
        let dataDoctor = await db.Doctor_info.findOne({
          where: {
            doctorId: id,
          },
          raw: true,
          nest: true,
          attributes: {
            exclude: ["password", "createdAt", "updatedAt", "id"],
          },
          include: [
            {
              model: db.AllCode,
              as: "priceTypeData",
              attributes: ["valueEn", "valueVi"],
            },
            {
              model: db.AllCode,
              as: "provinceTypeData",
              attributes: ["valueEn", "valueVi"],
            },
            {
              model: db.AllCode,
              as: "paymentTypeData",
              attributes: ["valueEn", "valueVi"],
            },
            {
              model: db.specialty,
              as: "specialtyData",
              attributes: ["name"],
            },
            {
              model: db.Clinic,
              as: "clinicData",
              attributes: ["name"],
            },
          ],
        });
        if (!data) {
          resolve({
            errCode: 2,
            errMessage: "Not found user",
            data: {},
          });
        } else {
          if (data.image) {
            data.image = new Buffer(data.image, "base64").toString("binary");
          }
          if (
            dataDoctor &&
            dataDoctor.priceTypeData &&
            dataDoctor.provinceTypeData &&
            dataDoctor.paymentTypeData &&
            dataDoctor.specialtyData &&
            dataDoctor.clinicData
          ) {
            data.Doctor_detail_price = dataDoctor.priceTypeData;
            data.Doctor_detail_province = dataDoctor.provinceTypeData;
            data.Doctor_detail_payment = dataDoctor.paymentTypeData;
            data.Doctor_detail_specialty = dataDoctor.specialtyData;
            data.Doctor_detail_clinic = dataDoctor.clinicData;
          }

          resolve({
            errCode: 0,
            errMessage: "Found a user",
            data,
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
let saveSchedule = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data && !data.schedule) {
        resolve({
          errCode: -1,
          errMessage: "Missing data",
        });
      } else {
        let schedule = data.arrSchedule;
        if (schedule && schedule.length > 0) {
          schedule = schedule.map((item) => {
            item.maxNumber = +MAX_NUMBER_SCHEDULE;
            return item;
          });
        }
        let res = await db.Schedule.findAll({
          where: {
            doctorId: schedule[0].doctorId,
            date: schedule[0].date,
          },
          raw: true,
          nest: true,
          attributes: {
            exclude: ["createdAt", "updatedAt", "id", "currentNumber"],
          },
        });
        if (res.length === 0) {
          await db.Schedule.bulkCreate(schedule);
        } else {
          //compare
          Array.prototype.equals = function (array) {
            if (!Array.isArray(array)) {
              throw new Error("Tham số truyền vào phải là một mảng.");
            }
            const differences = {
              toAdd: [],
              toRemove: [],
            };
            differences.toAdd = array.filter(
              (item2) =>
                !this.some(
                  (item1) => JSON.stringify(item1) === JSON.stringify(item2)
                )
            );
            differences.toRemove = this.filter(
              (item1) =>
                !array.some(
                  (item2) => JSON.stringify(item1) === JSON.stringify(item2)
                )
            );
            return differences;
          };
          let check = res.equals(data.arrSchedule);
          await db.Schedule.bulkCreate(check.toAdd);
          if (check.toRemove.length > 0) {
            check.toRemove.map(async (item) => {
              await db.Schedule.destroy({
                where: {
                  doctorId: item.doctorId,
                  date: item.date,
                  timeType: item.timeType,
                },
              });
            });
          }

          // await db.Schedule.destroy(check.toRemove);
        }

        resolve({
          errCode: 0,
          errMessage: "Done",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
let getAllScheduleByDay = async (doctorId, date) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!doctorId || !date) {
        resolve({
          errCode: 1,
          errMessage: "Missing data required",
        });
      } else {
        let data = await db.Schedule.findAll({
          where: {
            doctorId: doctorId,
            date: date,
          },
          raw: true,
          nest: true,
          attributes: {
            exclude: ["createdAt", "updatedAt", "currentNumber"],
          },
          include: [
            {
              model: db.AllCode,
              as: "timeTypeData",
              attributes: ["valueEn", "valueVi"],
            },
            {
              model: db.User,
              as: "doctorIdData",
              attributes: ["firstName", "lastName"],
            },
          ],
        });
        if (!data) {
          resolve({
            errCode: 1,
            errMessage: "not found anything",
            data: [],
          });
        } else {
          resolve({
            errCode: 0,
            errMessage: "done",
            data,
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
let CreateNewSpecialty = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.name || !data.descriptionHTML || !data.descriptionMarkdown) {
        resolve({
          errCode: 1,
          errMessage: "Missing something",
        });
      } else {
        let user = await db.specialty.create({
          name: data.name,
          descriptionHTML: data.descriptionHTML,
          descriptionMarkdown: data.descriptionMarkdown,
          image: data.image,
        });
        if (!user) {
          resolve({
            errCode: -1,
            errMessage: "Create not complete",
          });
        } else {
          resolve({
            errCode: 0,
            errMessage: "Complete",
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
let GetAllSpecialty = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.specialty.findAll({
        limit: 10,
        raw: true,
        nest: true,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      if (!data || data.length <= 0) {
        resolve({
          errCode: -1,
          errMessage: "Create not complete",
          data: [],
        });
      } else {
        resolve({
          errCode: 0,
          errMessage: "Complete",
          data: data,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
let GetAllDoctorBySpecialty = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        let data = await db.Doctor_info.findAll({
          where: {
            specialtyId: id,
          },
          raw: true,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        });
        if (!data || data.length < 0) {
          resolve({
            errCode: 1,
            errMessage: "Not found any doctor",
          });
        } else {
          resolve({
            errCode: 0,
            errMessage: "complete",
            data,
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
let GetDetailSpecialty = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        let data = await db.specialty.findOne({
          where: {
            id: id,
          },
          raw: true,
          attributes: {
            exclude: ["createdAt", "updatedAt", "image"],
          },
        });
        if (!data) {
          resolve({
            errCode: 1,
            errMessage: "Not found any specialty",
          });
        } else {
          resolve({
            errCode: 0,
            errMessage: "complete",
            data,
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
let GetDoctorByProvince = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        if (id.actionId === "specialty") {
          if (
            id.provinceId === "all" ||
            id.provinceId === "ALL" ||
            id.provinceId === "All"
          ) {
            let data = await db.Doctor_info.findAll({
              where: {
                specialtyId: id.specialtyId,
              },
              raw: true,
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            });
            if (!data) {
              resolve({
                errCode: 1,
                errMessage: "Not found any doctor",
              });
            } else {
              resolve({
                errCode: 0,
                errMessage: "complete",
                data,
              });
            }
          } else {
            let data = await db.Doctor_info.findAll({
              where: {
                provinceID: id.provinceId,
                specialtyId: id.specialtyId,
              },
              raw: true,
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            });
            if (!data) {
              resolve({
                errCode: 1,
                errMessage: "Not found any doctor",
              });
            } else {
              resolve({
                errCode: 0,
                errMessage: "complete",
                data,
              });
            }
          }
        } else if (id.actionId === "clinic") {
          if (
            id.provinceId === "all" ||
            id.provinceId === "ALL" ||
            id.provinceId === "All"
          ) {
            let data = await db.Doctor_info.findAll({
              where: {
                clinicId: id.specialtyId,
              },
              raw: true,
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            });
            if (!data) {
              resolve({
                errCode: 1,
                errMessage: "Not found any doctor",
              });
            } else {
              resolve({
                errCode: 0,
                errMessage: "complete",
                data,
              });
            }
          } else {
            let data = await db.Doctor_info.findAll({
              where: {
                provinceID: id.provinceId,
                clinicId: id.specialtyId,
              },
              raw: true,
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            });
            if (!data) {
              resolve({
                errCode: 1,
                errMessage: "Not found any doctor",
              });
            } else {
              resolve({
                errCode: 0,
                errMessage: "complete",
                data,
              });
            }
          }
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
let CreateNewClinic = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.name || !data.descriptionHTML || !data.descriptionMarkdown) {
        resolve({
          errCode: 1,
          errMessage: "Missing something",
        });
      } else {
        let user = await db.Clinic.create({
          name: data.name,
          descriptionHTML: data.descriptionHTML,
          descriptionMarkdown: data.descriptionMarkdown,
          image: data.image,
        });
        if (!user) {
          resolve({
            errCode: -1,
            errMessage: "Create not complete",
          });
        } else {
          resolve({
            errCode: 0,
            errMessage: "Complete",
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
let GetAllClinic = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Clinic.findAll({
        limit: 10,
        raw: true,
        nest: true,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      if (!data || data.length <= 0) {
        resolve({
          errCode: -1,
          errMessage: "Not found",
          data: [],
        });
      } else {
        resolve({
          errCode: 0,
          errMessage: "Complete",
          data: data,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
let GetAllDoctorByClinic = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        let data = await db.Doctor_info.findAll({
          where: {
            clinicId: id,
          },
          raw: true,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        });
        if (!data || data.length < 0) {
          resolve({
            errCode: 1,
            errMessage: "Not found any doctor",
          });
        } else {
          resolve({
            errCode: 0,
            errMessage: "complete",
            data,
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
let GetDetailClinic = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        let data = await db.Clinic.findOne({
          where: {
            id: id,
          },
          raw: true,
          attributes: {
            exclude: ["createdAt", "updatedAt", "image"],
          },
        });
        if (!data) {
          resolve({
            errCode: 1,
            errMessage: "Not found any clinic",
          });
        } else {
          resolve({
            errCode: 0,
            errMessage: "complete",
            data,
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleUserLogin: handleUserLogin,
  handleGetAllUser: handleGetAllUser,
  handleCreateNewUser,
  handleUpdateAUser,
  handleDeleteAUser,
  getAllCodeService,
  getDoctor,
  getAllDoctor,
  saveInfoDoctor,
  getDetailDoctor,
  saveSchedule,
  getAllScheduleByDay,
  CreateNewSpecialty,
  GetAllSpecialty,
  GetAllDoctorBySpecialty,
  GetDetailSpecialty,
  GetDoctorByProvince,
  CreateNewClinic,
  GetAllClinic,
  GetAllDoctorByClinic,
  GetDetailClinic,
};
