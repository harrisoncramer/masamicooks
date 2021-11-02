######################
#### Cloud Config ####
######################

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
    random = {
      source = "hashicorp/random"
    }
  }
  backend "remote" {
    organization = "harrisoncramer"
    workspaces {
      name = "masamicooks"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
}

# Set common tags
locals {
  common_tags = {
    Environment = terraform.workspace # Will be production/dev/staging, depending on workspace set
    Application = var.application
    Owner       = var.owner
    ManagedBy   = "Terraform"
  }
}
