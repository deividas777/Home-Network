

            <?php

             session_start();

                    if(isset($_POST["login"])){

                               require("connect.php");

                                    $email = strip_tags(trim($_POST["email"]));
                                    $password = strip_tags(trim($_POST["password"]));


                                           if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                                               $email = $email;
                                           }else{
                                               $email= "";
                                               mysqli_close($conn);
                                           }

                                        $y = strlen($password.$email);
                                        $sessionName = sha1($email);

                                                for($x = 0; $x < $y; $x++){
                                                   $sessionName = sha1($sessionName);
                                                }

                                    $password = sha1($password);

                                    $sql = "SELECT * FROM users WHERE uemail='".$email."' AND upassword='".$password."' LIMIT 1";
                                    #$updateTime = "UPDATE login SET login_date=now() WHERE email='".$email."'";
                                     $updateTime = "INSERT INTO login (email,password,login_date,session) values ('$email','$password',now(),'$sessionName')";
                                            if (mysqli_query($conn, $updateTime)) {
                                                //echo "<br>Record updated successfully";
                                            } else {
                                                //echo "<br>Error updating record: " . mysqli_error($conn);
                                            }

                                    $result = $conn->query($sql);

                                    if($result->num_rows > 0){

                                         $_SESSION["name"] = $email;
                                         $_SESSION["id"] = $sessionName;


                                         setcookie($email, $sessionName, time() + (86400 * 7), "/");

                                      while($row = $result->fetch_assoc()){

                                          $res = $row['uemail'];
                                          echo  $res;
                                      }


                                    }else{
                                        echo "<br />0 results";
                                    }


                                    }

                                    mysqli_close($conn);

            ?>

