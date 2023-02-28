
CREATE TABLE IF NOT EXISTS `category` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255),
  `status` int Default 1

  
) ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `product` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255),
  `price` float(10,3),
  `content` text ,
  `image` VARCHAR(255),
  `sale_price` float(10,3),
  `status` int  Default 1 ,
  `category_id` int 
  
  
    FOREIGN KEY (`category_id`) 
    REFERENCES `category` (`id`)
  
  
  
) ENGINE = InnoDB;

