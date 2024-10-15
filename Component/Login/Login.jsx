import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";

// Import các hình ảnh
import googleIcon from "../../assets/Login/google.png";
import mailIcon from "../../assets/Login/mail.png";
import keyIcon from "../../assets/Login/key.png";
import facebookIcon from "../../assets/Login/facebook.png";
import githubIcon from "../../assets/Login/github.png";
import xIcon from "../../assets/Login/xicon.png";
import backgroundImage from "../../assets/Login/background.png"; // Hình nền chính
import mainBackground from "../../assets/Login/main.png"; // Hình main.png bọc component

const Login = () => {
  const [isRemembered, setIsRemembered] = useState(false); // State for checkbox
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        {/* Hình nền main.png bọc các component */}
        <Image source={mainBackground} style={styles.mainBackground} />

        {/* Các thành phần bên trong */}
        <View style={styles.content}>
          {/* Tiêu đề */}
          <Text style={styles.header}>Đăng nhập</Text>

          {/* Google login */}
          <TouchableOpacity style={styles.googleContainer}>
            <Image source={googleIcon} style={styles.googleImage} />
          </TouchableOpacity>

          {/* Nhập email */}
          <View style={styles.inputContainer}>
            <Image source={mailIcon} style={styles.icon} />
            <TextInput style={styles.input} placeholder="Nhập email/SĐT" />
          </View>

          {/* Nhập mật khẩu */}
          <View style={styles.inputContainer}>
            <Image source={keyIcon} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Nhập mật khẩu"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.rememberContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {/* <CheckBox
                disabled={false}
                value={isRemembered} // Using the correct state variable here
                onValueChange={(newValue) => setIsRemembered(newValue)} // Correct handler for checkbox change
                style={styles.checkbox}
              /> */}
              <Text style={styles.rememberText}>Ghi nhớ tôi</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>

          {/* Continue button */}
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueText}>Tiếp tục</Text>
          </TouchableOpacity>
          <View style={styles.socialContainer}>
            <TouchableOpacity>
              <Image source={facebookIcon} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={xIcon} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={githubIcon} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end", // Giữ các thành phần ở dưới cùng
    alignItems: "center",
    padding: 20,
    paddingBottom: 10, // Tăng khoảng cách so với cạnh dưới màn hình
  },
  mainBackground: {
    position: "absolute",
    width: "100%", // Chiều rộng của main.png
    height: "70%", // Điều chỉnh chiều cao phù hợp
    bottom: 0, // Đặt main.png ở dưới cùng màn hình
    resizeMode: "contain",
    alignItems: "center", // Căn giữa theo chiều ngang
    justifyContent: "center", // Căn giữa theo chiều dọc
  },
  content: {
    position: "relative",
    width: "80%",
    alignItems: "center",
    justifyContent: "flex-start", // Đẩy các thành phần lên trên
    paddingTop: 200, // Điều chỉnh khoảng cách từ trên xuống
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff00ff",
    marginBottom: 20,
  },
  googleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  googleImage: {
    width: 150,
    height: 50,
    resizeMode: "contain",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 25,
    marginBottom: 20,
    width: "90%",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: "#0000ff",
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 5,
    marginTop: 20,
  },
  continueText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  socialContainer: {
    flexDirection: "row", // Xếp thành hàng ngang
    justifyContent: "space-between", // Giãn đều các icon
    width: "50%", // Kích thước container chứa các icon
    marginTop: 20, // Thêm khoảng cách giữa nút "Tiếp tục" và các icon
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  rememberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginBottom: 20, // Khoảng cách giữa phần này và nút "Tiếp tục"
  },
  rememberText: {
    marginLeft: 10,
    fontSize: 16,
  },
  forgotPassword: {
    color: "red",
    marginLeft: "auto", // Đẩy "Quên mật khẩu?" sang phía bên phải
    fontSize: 16,
  },
});

export default Login;
