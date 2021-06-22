# Code generated by github.com/lolopinto/ent/ent, DO NOT edit.

"""add column answered to table questions

Revision ID: 2d9c570f6ce0
Revises: c9d469b0159b
Create Date: 2021-06-22 08:55:34.912177+00:00

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql


# revision identifiers, used by Alembic.
revision = '2d9c570f6ce0'
down_revision = 'c9d469b0159b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('questions', sa.Column(
        'answered', sa.Boolean(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('questions', 'answered')
    # ### end Alembic commands ###
