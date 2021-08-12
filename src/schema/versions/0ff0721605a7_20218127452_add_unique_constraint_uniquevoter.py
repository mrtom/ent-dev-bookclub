# Code generated by github.com/lolopinto/ent/ent, DO NOT edit.

"""add unique constraint uniqueVoter

Revision ID: 0ff0721605a7
Revises: 3c8d0f4ede92
Create Date: 2021-08-12 07:45:02.554143+00:00

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql


# revision identifiers, used by Alembic.
revision = '0ff0721605a7'
down_revision = '3c8d0f4ede92'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint('uniqueVoter', 'question_votes', [
                                'user_id', 'question_id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('uniqueVoter', 'question_votes', type_='unique')
    # ### end Alembic commands ###
